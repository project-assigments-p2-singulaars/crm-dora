import { Component } from '@angular/core';
import { CustomerFormComponent } from '../../components/customer-form/customer-form.component';

@Component({
  selector: 'acme-new-customer-form-page',
  standalone: true,
  imports: [CustomerFormComponent],
  templateUrl: './new-customer-form-page.component.html',
  styleUrl: './new-customer-form-page.component.scss'
})
export class NewCustomerFormPageComponent {

}
