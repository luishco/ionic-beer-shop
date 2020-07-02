import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  constructor(private auth: AuthService) { }
  chart: {}
  total_price: number = 0
  orders: any
  
  addToChart(beerFirstName) {
    if(this.chart === undefined) {
      this.chart = {}
      this.total_price = 0
    }
    if(!(beerFirstName in this.chart))
      this.chart[beerFirstName] = 0;
    this.chart[beerFirstName]++;
    this.total_price += 5

    return this.chart;
  }

  removeFromChart(beerFirstName) {
    if(!(beerFirstName in this.chart))
      return;
    this.total_price -= 5
    if(--this.chart[beerFirstName] === 0)
      delete this.chart[beerFirstName];

    return this.chart;
  }

  resetChart() {
    this.chart = {};
    this.total_price = 0;
  }

  async setOrders() {
    this.orders = await this.auth._getOrders();
  }

  getOrders() {
    return this.orders;
  }

}
