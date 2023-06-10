import { Component } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Classes } from '../shared/classes';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-display-form',
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <app-dynamic-form [questions]="questions$ | async"></app-dynamic-form>
    </div>
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
