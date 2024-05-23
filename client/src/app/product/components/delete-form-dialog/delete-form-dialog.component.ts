import { Component, Inject, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductService } from '../../../shared/services/product.service';

@Component({
  selector: 'acme-delete-form-dialog',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,MatDialogModule],
  templateUrl: './delete-form-dialog.component.html',
  styleUrl: './delete-form-dialog.component.scss'
})

export class DeleteFormDialogComponent {

  // @Input() id!:number;

  routes = inject(Router)
  private productService = inject(ProductService)
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  deleteProduct(){
    alert('¡Producto Eliminado Correctamente!')
    this.routes.navigate(['/products'])
    this.productService.deleteProductById(Number(this.data.id)).subscribe();
   
  }

}
