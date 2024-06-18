import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-z-price',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './z-price.component.html',
})
export class ZPriceComponent {
  @Input() price$: Observable<string> | null = null;
}
