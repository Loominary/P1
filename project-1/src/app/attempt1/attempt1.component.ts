import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-attempt1',
  templateUrl: './attempt1.component.html',
  styleUrls: ['./attempt1.component.less'],
})
export class Attempt1Component implements OnInit {
  form!: FormGroup;
  someData = 'Hi my name is {name} and my dog name is {dog}';
  replaceables = ['name'];
  regex = /{(.*?)}/g;

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl(),
    });
  }

  onSubmit() {
    console.log('Submit works');
  }
  useData() {
    console.log('useData works');
    console.log(this.someData);
    let found = this.someData.match(this.regex);
    //this.filterFound(found);
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
}
