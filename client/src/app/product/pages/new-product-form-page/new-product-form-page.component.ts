import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../../shared/interfaces/product';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'acme-new-product-form-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-product-form-page.component.html',
  styleUrl: './new-product-form-page.component.scss'
})
export class NewProductFormPageComponent {
  @Output() formSent=new EventEmitter();

  submit( productForm:NgForm ){
    const product: Product = {
      title: productForm.controls['productTitle'].value,
      price: productForm.controls['productPrice'].value
    }

    this.formSent.emit( product );
    productForm.resetForm();
  }
}
