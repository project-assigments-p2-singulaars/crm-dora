import { Component, Input, signal } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { Product } from '../../interfaces/product';
import { ProductFormComponent } from "../../../product/components/product-form/product-form.component";
@Component({
    selector: 'acme-button-edit',
    standalone: true,
    templateUrl: './button-edit.component.html',
    styleUrl: './button-edit.component.scss',
    imports: [MatCardModule, MatButtonModule, ProductFormComponent]
})
export class ButtonEditComponent {

}

