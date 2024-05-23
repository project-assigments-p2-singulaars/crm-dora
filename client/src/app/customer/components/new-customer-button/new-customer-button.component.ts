import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatMiniFabButton } from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'acme-new-customer-button',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatMiniFabButton],
  templateUrl: './new-customer-button.component.html',
  styleUrl: './new-customer-button.component.scss'
})
export class NewCustomerButtonComponent {

}
