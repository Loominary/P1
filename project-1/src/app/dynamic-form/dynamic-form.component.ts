import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Classes } from '../shared/classes';
import { FormControlService } from '../shared/form-control.service';
import Quill from 'quill';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.less'],
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: Classes<string>[] | null = [];
  @Output() dataChanged = new EventEmitter<string>();

  form!: FormGroup;
  payLoad = '';
  results!: string;
  replaceables: string[] = [''];
  fullObj: { [key: string]: string }[] = [];
  
 

  replaced!: string;
  toBeReplaced:string[] = [''];

  //filtering the templates
  someData = 'Hi my name is {name} and my dog name is {dog}. Also {name}. Also, {somevalue}';
  regex = /{(.*?)}/g;

  constructor(private fcs: FormControlService) {}

  ngOnInit() {
    this.form = this.fcs.toFormGroup(this.questions as Classes<string>[]);
  }

  /* filterFound() {
    let found = this.someData.match(this.regex);
    console.log(found);

    if (found == null) {
      console.log('Entry is null');
    } else {
      for (let i = 0; i < found?.length; i++) {
        console.log(i);
      }
    }
  } */


  //to do: reload payload on submit, return a markdown block(?)
  onSubmit() {
    this.results = this.form.getRawValue();
    console.log(this.results);
    
    const entries2 = Object.entries(this.results);
 
    // Insert form entries into array
    for (const [key, value] of Object.entries(this.results)) {
      const obj = Object.fromEntries(entries2);

      this.replaceables.push(`${key}:${value}`);
    }

    this.replaceables.forEach((item) => {
      const [key, value] = item.split(':').map((str) => str.trim());
      if (key && value) {
        const obj = { [key]: value };
        this.fullObj.push(obj);
       
      }
    });

    //Match and replace replaceables matching obj entries
    const replacedData = this.someData.replace(this.regex, (match: string, placeholder: string) => {
      for (const entry of this.fullObj) {
        if (entry.hasOwnProperty(placeholder)) {
          return entry[placeholder];
        }
      }
      return match; // Placeholder not found in formEntries, keep original placeholder
    });
    /* const delta = this.quill.clipboard.convert(replacedData);
    this.quill.setContents(delta) */
    this.payLoad =JSON.stringify(replacedData); 
   /*  const newData:string="Some data to editor";
    this.dataChanged.emit(newData); */
  }
}


