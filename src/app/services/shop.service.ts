import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  chart: {}
  total_price: number
  
  constructor() { 
    this.total_price = 0;
  }

  addToChart(beerFirstName) {
    if(this.chart === undefined) {
      this.chart = {}
      this.total_price = 0
    }
    if(!(beerFirstName in this.chart))
      this.chart[beerFirstName] = 0;
    this.chart[beerFirstName]++;
    this.total_price += 5
  }

  removeFromChart(beerFirstName) {
    if(!(beerFirstName in this.chart))
      return;
    this.total_price -= 5
    if(--this.chart[beerFirstName] === 0)
      delete this.chart[beerFirstName];
  }

}
