import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Classes } from '../shared/classes';
import { FormControlService } from '../shared/form-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.less'],
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: Classes<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';
  results!: string;
  replaceables = [''];
  fullObj=[''];
  replaced!:string;
  

  //filtering the templates
  someData = 'Hi my name is {name} and my dog name is {dog}. Also {name}.';
  regex = /{(.*?)}/g;

  constructor(private fcs: FormControlService) {}

  ngOnInit() {
    this.form = this.fcs.toFormGroup(this.questions as Classes<string>[]);
  }

  filterFound() {
    let found = this.someData.match(this.regex);
    console.log(found);

    if (found == null) {
      console.log('Entry is null');
    } else {
      for (let i = 0; i < found?.length; i++) {
        console.log(i);
      }
    }
  }

  onSubmit() {
    this.results = this.form.getRawValue();

    let found = this.someData.match(this.regex);



    for (const [key, value] of Object.entries(this.results)) {
      //this.replaceables.push(`${value}`);
      
      const entries = new Map([
        [key, value]
      ])
      const obj = Object.fromEntries(entries);
      this.replaceables.push(value);
      //this.fullObj.push(obj)
      //console.log(entries);
      
      console.log(obj);
      
      console.log(key, value);
      //console.log(Object.fromEntries());
       
    }
    
    for (let i = 0; i < this.replaceables.length; i++) {
      console.log(this.replaceables[i]);
      
      
    }
    this.payLoad = JSON.stringify(this.replaceables);
  }


}












//Dump

// this.results = JSON.stringify(this.form.getRawValue());
// console.log(this.replaceables);

//console.log(`${key}: ${value}`);
//console.log('{' + `${value}` + '}');
/* if (this.replaceables.length !== undefined) {
        for (let i = 0; i < this.replaceables?.length; i++) {
          console.log(this.replaceables[i]);
        }
      } else {
        console.log('No matches found');
      } */
/* for (let i = 0; i < this.replaceables.length; i++) {
      console.log(this.replaceables[i]);
    
    } */
//this.payLoad = JSON.stringify(this.form.getRawValue());
