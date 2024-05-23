import { Component } from '@angular/core';
import { MatButtonModule, MatMiniFabButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'acme-new-order-button',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatMiniFabButton],
  templateUrl: './new-order-button.component.html',
  styleUrl: './new-order-button.component.scss'
})
export class NewOrderButtonComponent {

}
