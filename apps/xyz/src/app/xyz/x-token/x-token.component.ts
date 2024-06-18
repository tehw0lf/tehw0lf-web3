import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ControlContainer, FormsModule, NgForm } from '@angular/forms';
import { LivedataPrice, NeoApiService } from '@tehw0lf/neo-api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-x-token',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [NeoApiService],
  templateUrl: './x-token.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class XTokenComponent {
  private neoApiService: NeoApiService = inject(NeoApiService);
  latestLivedataPrices$: Observable<LivedataPrice[]> =
    this.neoApiService.getFlamingoLivedataPricesLatest();
}
