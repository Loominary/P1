import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { Classes } from 'src/app/shared/classes';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-display-form',
  template: `
    <div>
      <h2>Testing Forms</h2>
      <app-dynamic-form  [questions]="questions$ | async"></app-dynamic-form>
    </div>
    <app-quill-editor ></app-quill-editor>
  `,
  providers:  [DataService],
  //templateUrl: './display-form.component.html',
  styleUrls: ['./display-form.component.less']
})
export class DisplayFormComponent {
  questions$: Observable<Classes<any>[]>;

  constructor(service: DataService) {
    this.questions$ = service.getQuestions();
  }
}
/*   
[content]="quillContent"
(dataChanged)="updateQuillContent($any($event))" */