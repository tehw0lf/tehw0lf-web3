import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LivedataPrice } from './neo-types';

@Injectable({
  providedIn: 'root',
})
export class NeoApiService {
  baseUrl = 'https://neo-api.b-cdn.net';

  constructor(private http: HttpClient) {}

  // angular service implementation of https://github.com/flamingo-finance/flamingo-dashboard-athon/blob/main/js/api-client.js

  // PUBLIC

  // Wallet Data

  getWalletWalletHistory(address: string, page: number) {
    return this.fetchData('/wallet/wallet/history', {
      neo_address: address,
      page,
    });
  }

  getWalletWalletLatest(address: string) {
    return this.fetchData('/wallet/wallet/latest', { neo_address: address });
  }

  getWalletClaimsHistory(address: string, page: number) {
    return this.fetchData('/wallet/claims/history', {
      neo_address: address,
      page,
    });
  }

  getWalletClaimsLatest(address: string) {
    return this.fetchData('/wallet/claims/latest', { neo_address: address });
  }

  getWalletTradeHistory(address: string, page: number) {
    return this.fetchData('/wallet/trade/history', {
      neo_address: address,
      page,
    });
  }

  getWalletTradeLatest(address: string) {
    return this.fetchData('/wallet/trade/latest', { neo_address: address });
  }

  getWalletLpHistory(address: string, page: number) {
    return this.fetchData('/wallet/lp/history', { neo_address: address, page });
  }

  getWalletLpLatest(address: string) {
    return this.fetchData('/wallet/lp/latest', { neo_address: address });
  }

  getWalletStakingHistory(address: string, page: number) {
    return this.fetchData('/wallet/staking/history', {
      neo_address: address,
      page,
    });
  }

  getWalletStakingLatest(address: string) {
    return this.fetchData('/wallet/staking/latest', { neo_address: address });
  }

  getWalletLendHistory(address: string, page: number) {
    return this.fetchData('/wallet/lend/history', {
      neo_address: address,
      page,
    });
  }

  getWalletLendLatest(address: string) {
    return this.fetchData('/wallet/lend/latest', { neo_address: address });
  }

  getWalletTransferHistory(address: string, page: number) {
    return this.fetchData('/wallet/transfer/history', {
      neo_address: address,
      page,
    });
  }

  getWalletTransferLatest(address: string) {
    return this.fetchData('/wallet/transfer/latest', { neo_address: address });
  }

  // Flamingo Live Data

  getFlamingoLivedataPricesLatest(): Observable<LivedataPrice[]> {
    return this.fetchData('/flamingo/live-data/prices/latest', {});
  }

  getFlamingoLivedataPricesFromblock(blocknumber: number) {
    return this.fetchData(
      `/flamingo/live-data/prices/from-block/${blocknumber}`,
      {}
    );
  }

  getFlamingoLivedataPricesFromdatetime(data: {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
  }) {
    return this.fetchData(
      `/flamingo/live-data/prices/from-datetime/${data.year}/${data.month}/${data.day}/${data.hour}/${data.minute}`,
      {}
    );
  }

  getFlamingoLivedataPricesFromtimestamp(
    timestamp: number
  ): Observable<LivedataPrice[]> {
    return this.fetchData(
      `/flamingo/live-data/prices/from-timestamp/${timestamp}`,
      {}
    );
  }

  getFlamingoLivedataFiatexchangerate(pair: string) {
    return this.fetchData(`/flamingo/live-data/fiat-exchange-rate/${pair}`, {});
  }

  getFlamingoLivedataClaimsHistory(page: number) {
    return this.fetchData('/flamingo/live-data/claims/history', { page });
  }

  getFlamingoLivedataClaimsLatest() {
    return this.fetchData('/flamingo/live-data/claims/latest', {});
  }

  getFlamingoLivedataTradeHistory(page: number) {
    return this.fetchData('/flamingo/live-data/trade/history', { page });
  }

  getFlamingoLivedataTradeLatest() {
    return this.fetchData('/flamingo/live-data/trade/latest', {});
  }

  getFlamingoLivedataLpHistory(page: number) {
    return this.fetchData('/flamingo/live-data/lp/history', { page });
  }

  getFlamingoLivedataLpLatest() {
    return this.fetchData('/flamingo/live-data/lp/latest', {});
  }

  getFlamingoLivedataStakingHistory(page: number) {
    return this.fetchData('/flamingo/live-data/staking/history', { page });
  }

  getFlamingoLivedataStakingLatest() {
    return this.fetchData('/flamingo/live-data/staking/latest', {});
  }

  getFlamingoLivedataLendHistory(page: number) {
    return this.fetchData('/flamingo/live-data/lend/history', { page });
  }

  getFlamingoLivedataLendLatest() {
    return this.fetchData('/flamingo/live-data/lend/latest', {});
  }

  getFlamingoLivedataTransferHistory(page: number) {
    return this.fetchData('/flamingo/live-data/transfer/history', { page });
  }

  getFlamingoLivedataTransferLatest() {
    return this.fetchData('/flamingo/live-data/transfer/latest', {});
  }

  // Flamingo Analytics Data

  getFlamingoAnalyticsMonthhistory(
    collection: string,
    params: { year: number; month: number }
  ) {
    return this.fetchData(
      `/flamingo/analytics/month-history/${collection}`,
      params
    );
  }

  getFlamingoAnalyticsMonthlatest(collection: string) {
    return this.fetchData(`/flamingo/analytics/month-latest/${collection}`, {});
  }

  getFlamingoAnalyticsDailyhistory(
    collection: string,
    params: { year: number; month: number; day: number }
  ) {
    return this.fetchData(
      `/flamingo/analytics/daily-history/${collection}`,
      params
    );
  }

  getFlamingoAnalyticsDailylatest(collection: string) {
    return this.fetchData(`/flamingo/analytics/daily-latest/${collection}`, {});
  }

  getFlamingoAnalyticsRolling30days(collection: string) {
    return this.fetchData(
      `/flamingo/analytics/rolling-30-days/${collection}`,
      {}
    );
  }

  getFlamingoAnalyticsFlamingoTotalsupply() {
    return this.fetchData('/flamingo/analytics/flamingo/total-supply', {});
  }

  getFlamingoAnalyticsFlamingoUsdvaluelocked() {
    return this.fetchData('/flamingo/analytics/flamingo/usd-value-locked', {});
  }

  // Neo Blockchain Data

  getNeoBlock(index: number, flamingoData: string) {
    return this.fetchData('/neo/block', { index, flamingo_data: flamingoData });
  }

  getNeoBlockLatest(flamingoData: string) {
    return this.fetchData('/neo/block/latest', { flamingo_data: flamingoData });
  }

  getNeoBlocksHistory(page: number, flamingoData: string) {
    return this.fetchData('/neo/blocks/history', {
      page,
      flamingo_data: flamingoData,
    });
  }

  getNeoBlocksLatest(flamingoData: string) {
    return this.fetchData('/neo/blocks/latest', {
      flamingo_data: flamingoData,
    });
  }

  getNeoTransaction(txHash: string) {
    return this.fetchData('/neo/transaction', { tx_hash: txHash });
  }

  // PRIVATE

  fetchData<X extends object>(endpoint: string, params = {}): Observable<X> {
    const httpParams = new HttpParams();
    Object.entries(params).forEach((param: [string, any]) =>
      httpParams.set(param[0], param[1])
    );
    return this.http.get<X>(`${this.baseUrl}${endpoint}`, {
      params: httpParams,
    });
  }
}
