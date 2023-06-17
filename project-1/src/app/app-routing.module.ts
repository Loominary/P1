import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplatesComponent } from './templates/templates.component';
import { QuillEditorComponent } from './quill-editor/quill-editor.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DisplayFormComponent } from './display-form/display-form.component';
import { Attempt1Component } from './attempt1/attempt1.component';

const routes: Routes = [
  {path: 'templates', component:TemplatesComponent},
  {path:'quill-editor', component:QuillEditorComponent},
  {path: 'dynamic-forms', component:DynamicFormComponent},
  {path: 'display-form', component:DisplayFormComponent},
  {path: 'attempt1', component:Attempt1Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
