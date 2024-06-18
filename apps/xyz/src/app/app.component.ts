import { Component } from '@angular/core';

import { XyzComponent } from './xyz/xyz.component';

@Component({
  standalone: true,
  imports: [XyzComponent],
  selector: 'app-root',
  template: '<app-xyz></app-xyz>',
})
export class AppComponent {}
