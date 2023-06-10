import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplatesComponent } from './templates/templates.component';
import { QuillEditorComponent } from './quill-editor/quill-editor.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DisplayFormComponent } from './display-form/display-form.component';

const routes: Routes = [
  {path: 'templates', component:TemplatesComponent},
  {path:'quill-editor', component:QuillEditorComponent},
  {path: 'dynamic-forms', component:DynamicFormComponent},
  {path: 'display-form', component:DisplayFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
