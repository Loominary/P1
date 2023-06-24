import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Classes } from '../../shared/classes';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.less']
})
export class TemplatesComponent {
  @Input() question!: Classes<string>;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
}
