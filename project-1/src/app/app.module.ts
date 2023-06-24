import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuillModule } from 'ngx-quill';
import { ReactiveFormsModule } from '@angular/forms';
import { TemplatesComponent } from './dynamic-form/templates/templates.component';
import { QuillEditorComponent } from './dynamic-form/quill-editor/quill-editor.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DisplayFormComponent } from './dynamic-form/display-form/display-form.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplatesComponent,
    QuillEditorComponent,
    DynamicFormComponent,
    DisplayFormComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    QuillModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
