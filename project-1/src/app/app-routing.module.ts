import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplatesComponent } from './templates/templates.component';
import { QuillEditorComponent } from './quill-editor/quill-editor.component';

const routes: Routes = [
  {path: 'templates', component:TemplatesComponent},
  {path:'quill-editor', component:QuillEditorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
