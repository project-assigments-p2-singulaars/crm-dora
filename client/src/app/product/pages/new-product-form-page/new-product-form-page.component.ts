import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../../shared/interfaces/product';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductFormComponent } from '../../components/product-form/product-form.component';

@Component({
  selector: 'acme-new-product-form-page',
  standalone: true,
  imports: [FormsModule, ProductFormComponent],
  templateUrl: './new-product-form-page.component.html',
  styleUrl: './new-product-form-page.component.scss'
})
export class NewProductFormPageComponent {

}
