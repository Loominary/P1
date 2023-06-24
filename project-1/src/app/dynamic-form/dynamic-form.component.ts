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
  replaceables:string[] =[''];
  fullObj:{ [key: string]: string }[] = [];
  currentEntry!:string;
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
    console.log(found);
    
console.log(this.results);


const resultValues = Object.values(this.results);
const resultKeys = Object.keys(this.results);
const entries2 = Object.entries(this.results);
console.log(entries2);

this.replaceables.forEach(item=>{
  const [key, value] = item.split(':').map(str=>str.trim());
  if(key && value){
    const obj = {[key]:value};
    this.fullObj.push(obj);
    console.log(this.fullObj);
    
  }
});


    /* for (const [key, value] of Object.entries(this.results)) {
      //this.replaceables.push(`${value}`);
      console.log('aaa '+ key, value);
      
      const entries = new Map([
        [key, value]
      ])
      const obj = Object.fromEntries(entries2);
      console.log(obj );
      
      
      this.replaceables.push(`${key}:${value}`);
      
      console.log(this.replaceables);
     
       
    } */
    
    
    

    for (let i = 0; i < this.replaceables.length; i++) {
      
      console.log(this.replaceables[i]);
      console.log('full obj ' + this.fullObj);
      
      
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
