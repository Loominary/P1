import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Classes } from '../classes';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TextboxModule extends Classes<string>{ 
  override controlType = 'textbox';
}
