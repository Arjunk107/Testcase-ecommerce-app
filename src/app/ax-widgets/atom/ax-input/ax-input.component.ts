import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ax-input',
  templateUrl: './ax-input.component.html',
  styleUrls: ['./ax-input.component.scss']
})
export class AxInputComponent {
  @Input() formgrup!: FormGroup;
  @Input() formcontrolname!: string;
  @Input() plcholder!: string;
  @Input() name!: string;
  @Input() type!: string;
  @Input() iclass!: string;
}
