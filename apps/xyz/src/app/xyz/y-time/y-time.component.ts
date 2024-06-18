import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ControlContainer, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-y-time',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './y-time.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class YTimeComponent {}
