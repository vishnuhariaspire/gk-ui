import { Pipe, PipeTransform } from '@angular/core';
import { Order } from './order.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(orders: Order[], term: string): Order[] {
    return term == undefined
      ? orders
      : orders?.filter((order) =>
          order.orderDetail.toLowerCase().includes(term.toLowerCase())
        );
  }
}
