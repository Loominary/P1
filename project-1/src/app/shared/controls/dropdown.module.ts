import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Classes } from '../classes';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DropdownModule extends Classes<string> {
  override controlType = 'dropdown';

 }
