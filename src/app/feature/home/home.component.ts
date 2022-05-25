import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OrdersService } from './orders.service';
import { debounceTime, filter, Observable } from 'rxjs';
import { Order } from './order.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  orders$: Observable<Order[]>;
  search = new FormControl('');
  searchTerm = '';
  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.setSearchTerm();
    this.setOrders();
  }

  private setOrders() {
    this.orders$ = this.ordersService.getOrders();
  }

  private setSearchTerm() {
    this.search.valueChanges
      .pipe(
        filter((value) => value.length >= 3 || value.length == 0),
        debounceTime(500)
      )
      .subscribe((value) => (this.searchTerm = value));
  }
}
