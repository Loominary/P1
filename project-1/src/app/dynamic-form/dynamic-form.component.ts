import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Classes } from '../shared/classes';
import { FormControlService } from '../shared/form-control.service';


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.less']
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: Classes<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private fcs: FormControlService) {}

  ngOnInit() {
    this.form = this.fcs.toFormGroup(this.questions as Classes<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
