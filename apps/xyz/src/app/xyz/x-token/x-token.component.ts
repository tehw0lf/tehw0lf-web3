import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LivedataPrice } from '@tehw0lf/neo-api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-x-token',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './x-token.component.html',
})
export class XTokenComponent {
  @Input() latestLivedataPrices$: Observable<LivedataPrice[]> | null = null;
}
