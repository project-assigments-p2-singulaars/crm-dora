import { Component } from '@angular/core';
import { OrderFormComponent } from '../../components/order-form/order-form.component';

@Component({
  selector: 'acme-new-order-form-page',
  standalone: true,
  imports: [OrderFormComponent],
  templateUrl: './new-order-form-page.component.html',
  styleUrl: './new-order-form-page.component.scss'
})
export class NewOrderFormPageComponent {

}
