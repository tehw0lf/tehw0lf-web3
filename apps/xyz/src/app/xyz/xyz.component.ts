import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NeoApiService } from '@tehw0lf/neo-api';
import { Observable } from 'rxjs';

import { XTokenComponent } from './x-token/x-token.component';
import { YTimeComponent } from './y-time/y-time.component';
import { ZPriceComponent } from './z-price/z-price.component';

@Component({
  selector: 'app-xyz',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    XTokenComponent,
    YTimeComponent,
    ZPriceComponent,
  ],
  providers: [NeoApiService],
  templateUrl: './xyz.component.html',
})
export class XyzComponent {
  result$: Observable<number> | null = null;
  constructor(private neoApiService: NeoApiService) {}

  onSubmit(form: NgForm): void {
    if (form.form.valid) {
      this.neoApiService.getFlamingoLivedataPricesFromtimestamp(
        form.value.timestamp
      );
    }
  }
}
