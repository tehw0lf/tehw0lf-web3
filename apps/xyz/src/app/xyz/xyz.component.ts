import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LivedataPrice, NeoApiService } from '@tehw0lf/neo-api';
import { catchError, map, mergeMap, Observable, of } from 'rxjs';

import { XTokenComponent } from './x-token/x-token.component';
import { YTimeComponent } from './y-time/y-time.component';
import { ZPriceComponent } from './z-price/z-price.component';

export type XyzFormData = {
  token: string;
  date: Date;
};

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
  price$: Observable<string> | null = null;
  latestLivedataPrices$: Observable<LivedataPrice[]> | null = null;

  constructor(private neoApiService: NeoApiService) {
    this.latestLivedataPrices$ = this.getLatestLivedataPrices();
  }

  getLatestLivedataPrices(): Observable<LivedataPrice[]> {
    return this.neoApiService.getFlamingoLivedataPricesLatest();
  }

  onSubmit(form: NgForm): Observable<string> | null {
    if (form.valid) {
      const timestamp =
        form.value.date?.getTime() ?? new Date('06-18-2024 20:45').getTime();

      this.price$ = this.neoApiService
        .getFlamingoLivedataPricesFromtimestamp(timestamp)
        .pipe(
          mergeMap((res: LivedataPrice[]) =>
            res.filter(
              (entry: LivedataPrice) => entry.symbol === form.value.token
            )
          ),
          map((entry: LivedataPrice) => entry.usd_price.toString()),
          catchError(
            (error: { error: { detail: string } }): Observable<string> => {
              return of(error.error.detail);
            }
          )
        );
    }
    return null;
  }
}
