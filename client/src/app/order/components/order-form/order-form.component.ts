import { AsyncPipe } from '@angular/common';
import { Component, effect, inject, Input, OnInit, Signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { OrderService } from '../../../shared/services/order.service';
import { Address, Order } from '../../../shared/interfaces/order';
import { Product } from '../../../shared/interfaces/product';

@Component({
  selector: 'acme-order-form',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    FormsModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatSelectModule, 
    MatButtonModule, 
    AsyncPipe,
    MatAutocompleteModule,
    MatChipsModule,
    MatIconModule
  ],
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.scss'
})
export class OrderFormComponent implements OnInit {
  private formBuilder = inject( FormBuilder );
  private orderService = inject( OrderService );

  @Input() formType: 'new' | 'edit' = 'new';
  @Input() orderToBeEdited!: Signal<Order>;
  @Input() submitButtonText = 'Add Order';

  formData!: Order;
  orderForm = this.formBuilder.group({
    orderDate: ['', Validators.required],
    totalPrice: [0, Validators.required],
    customerId: [0, Validators.required],
    shippmentAddress: this.formBuilder.group({
      addressLine: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
      phone: ['', Validators.required],
    })
  });


  ngOnInit(): void {
    // BUG THAT BLOCKS INIT FORM CORRECTLY
    // this.updateFormValue();
  }

  constructor() {

    effect( () => {
      this.updateFormValue();
    })
  }


  errorMessage = '';

  updateFormValue(){
    if( this.formType === 'edit' ){

      const shippmentAddress = this.orderToBeEdited().shippmentAddress as Address;

      this.orderForm.setValue({
        orderDate: this.orderToBeEdited().orderDate as string,
        totalPrice: this.orderToBeEdited().totalPrice as number,
        customerId: this.orderToBeEdited().customerId as number,
        shippmentAddress: {
          addressLine: shippmentAddress.addressLine as string,
          country: shippmentAddress.country as string,
          city: shippmentAddress.city as string,
          postalCode: shippmentAddress.postalCode as string,
          phone: shippmentAddress.phone as string,
        }
      });

    }
  }


  handleFormSubmit(){

    this.formData = {
      orderDate: this.orderToBeEdited().orderDate as string,
      totalPrice: this.orderToBeEdited().totalPrice as number,
      customerId: this.orderToBeEdited().customerId as number,
      shippmentAddress: {
        addressLine: this.orderToBeEdited().shippmentAddress?.addressLine as string,
        country: this.orderToBeEdited().shippmentAddress?.country as string,
        city: this.orderToBeEdited().shippmentAddress?.city as string,
        postalCode: this.orderToBeEdited().shippmentAddress?.postalCode as string,
        phone: this.orderToBeEdited().shippmentAddress?.phone as string,
      },
      products: [...this.orderToBeEdited().products as Product[]]
    }

    if( this.formType === 'new' ){
      this.orderService.addOrder( this.formData )
        .subscribe( order => console.log( order , 'order added'));

      console.log( 'ORDER CREATED' );
      this.orderForm.reset();

    } else if( this.formType === 'edit' ){
      this.orderService.editOrderById( this.orderToBeEdited().id as number, this.formData )
        .subscribe( order => console.log( order, 'order edited' ) );
      console.log( 'ORDER SAVED & EDITED' );
    }

  }
}
