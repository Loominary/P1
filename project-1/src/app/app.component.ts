import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Delta } from 'quill';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  quillContent!: string;

/*   updateQuillContent(content: string) {
    this.quillContent = content;
  } */

  title = 'project-1';
}
