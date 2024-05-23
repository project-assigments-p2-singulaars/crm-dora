import { Component, Input, signal } from '@angular/core';
import { Product } from '../../../shared/interfaces/product';
import { JsonPipe } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ProductFormComponent } from '../product-form/product-form.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ButtonEditComponent } from "../../../shared/components/button-edit/button-edit.component";
import { ButtonDeleteComponent } from "../../../shared/components/button-delete/button-delete.component";
import { DeleteFormDialogComponent } from '../delete-form-dialog/delete-form-dialog.component';


@Component({
    selector: 'acme-product-details',
    standalone: true,
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.scss',
    imports: [JsonPipe, MatCardModule, MatButtonModule, ProductFormComponent, ButtonEditComponent, ButtonDeleteComponent]
})

export class ProductDetailsComponent {
  @Input('data') product!: Product;
  productFormActive = signal(false);

  constructor(public dialog: MatDialog){}

  toggleForm(){
    this.productFormActive.set( !this.productFormActive() )
  }
  
  openDialog(){
    const dialogRef = this.dialog.open(DeleteFormDialogComponent, {
      id:this.product.id?.toString() })

  }


}
