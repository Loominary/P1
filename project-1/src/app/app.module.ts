import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuillModule } from 'ngx-quill';
import { ReactiveFormsModule } from '@angular/forms';
import { TemplatesComponent } from './templates/templates.component';
import { QuillEditorComponent } from './quill-editor/quill-editor.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DisplayFormComponent } from './display-form/display-form.component';
import { Attempt1Component } from './attempt1/attempt1.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplatesComponent,
    QuillEditorComponent,
    DynamicFormComponent,
    DisplayFormComponent,
    Attempt1Component
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
