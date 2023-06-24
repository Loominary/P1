import { Injectable } from '@angular/core';

import { DropdownModule } from './controls/dropdown.module';
import { TextboxModule } from './controls/textbox.module';
import { of } from 'rxjs';
import { Classes } from './classes';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // TODO: get from a remote source of question metadata
  getQuestions() {

    const questions: Classes<string>[] = [

      new DropdownModule({
        key: 'brave',
        label: 'A drop down',
        value: 'Great',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxModule({
        key: 'name',
        label: 'Your name',
        value: '',
        required: true,
        order: 1
      }),

      new TextboxModule({
        key: 'dog',
        label: 'Your dog name',
        value: '',
        type: 'email',
        order: 2
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
