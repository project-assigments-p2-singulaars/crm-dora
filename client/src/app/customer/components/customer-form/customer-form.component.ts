import { Component, effect, inject, Input, OnInit, Signal } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomerService } from '../../../shared/services/customer.service';
import { Customer } from '../../../shared/interfaces/customer';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'acme-customer-form',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    FormsModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatSelectModule, 
    MatButtonModule, 
    MatAutocompleteModule,
    MatChipsModule,
    MatIconModule
  ],
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss'
})
export class CustomerFormComponent implements OnInit {
  private formBuilder = inject( FormBuilder );
  private customerService = inject( CustomerService );

  @Input() formType: 'new' | 'edit' = 'new';
  @Input() customerToBeEdited!: Signal<Customer>;
  @Input() submitButtonText = 'Add Product';

  formData!: Customer;
  customerForm = this.formBuilder.group({
    companyName: ['', Validators.required],
    contactName: ['', Validators.required],
    phone: [0, Validators.required],
    email: [''],
    address: [''],
  });


  ngOnInit(): void {
    // BUG THAT BLOCKS INIT FORM CORRECTLY
    // this.updateFormValue();
  }

  constructor() {

    effect( () => {
      console.log( 'customer signal changed' );
      this.updateFormValue();
    })
  }


  errorMessage = '';

  updateFormValue(){
    if( this.formType === 'edit' ){

      this.customerForm.setValue({
        companyName: this.customerToBeEdited().companyName as string,
        contactName: this.customerToBeEdited().contactName as string,
        phone: this.customerToBeEdited().phone as number,
        email: this.customerToBeEdited().email as string,
        address: this.customerToBeEdited().address as string
      });

    }
  }


  handleFormSubmit(){

    this.formData = {
      companyName: this.customerForm.value.companyName as string,
      contactName: this.customerForm.value.contactName as string,
      phone: this.customerForm.value.phone as number,
      email: this.customerForm.value.email as string,
      address: this.customerForm.value.address as string,
      orderIds: []
    }

    if( this.formType === 'new' ){
      this.customerService.addCustomer( this.formData )
        .subscribe( customer => console.log( customer , 'customer added'));

      console.log( 'CUSTOMER CREATED' );
      this.customerForm.reset();

    } else if( this.formType === 'edit' ){
      this.formData.orderIds = [ ...this.customerToBeEdited().orderIds as number[] ];
      this.customerService.editCustomerById( this.customerToBeEdited().id as number, this.formData )
        .subscribe( customer => console.log( customer, 'customer edited' ) );
      console.log( 'CUSTOMER SAVED & EDITED' );
    }

  }
}
