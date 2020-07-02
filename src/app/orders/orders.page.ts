import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  constructor(private shop: ShopService) { }
  orders = [
    {
      'Heineken': 2,
      'Stella': 3
    }
  ];
  objectKeys = Object.keys

  ngOnInit() {
    // this.shop.setOrders().then(() => {
    //   this.orders = this.shop.getOrders();
    //   console.log(this.orders)
    // })
  }

}
