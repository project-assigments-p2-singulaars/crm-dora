import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatMiniFabButton } from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'acme-new-product-button',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatMiniFabButton],
  templateUrl: './new-product-button.component.html',
  styleUrl: './new-product-button.component.scss'
})
export class NewProductButtonComponent {

}
