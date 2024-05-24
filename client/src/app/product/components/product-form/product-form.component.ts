import { Component, inject, ElementRef, ViewChild, Input, Signal, OnInit, effect } from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {merge} from 'rxjs';
import { Product } from '../../../shared/interfaces/product';

import {MatAutocompleteSelectedEvent, MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatIconModule} from '@angular/material/icon';
import {AsyncPipe} from '@angular/common';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { ProductService } from '../../../shared/services/product.service';


@Component({
  selector: 'acme-product-form',
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
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent implements OnInit {

  private formBuilder = inject( FormBuilder );
  private productService = inject( ProductService );

  @Input() formType: 'new' | 'edit' = 'new';
  @Input() productToBeEdited!: Signal<Product>;
  @Input() submitButtonText = 'Add Product';

  formData!: Product;
  productForm = this.formBuilder.group({
    title: ['', Validators.required],
    author: ['', Validators.required],
    publishedDate: [1900, Validators.required],
    genres: [''],
    description: [''],
    price: [0, Validators.required],
    image: [''],
    rating: [5]
  });


  /*  SELECT GENRES WITH CHIPS  */
  separatorKeysCodes: number[] = [ENTER, COMMA];
  genreCtrl = this.productForm.get('genres') as FormControl;
  filteredGenres!: Observable<string[]>;
  genres: string[] = ['Drama'];
  allGenres: string[] = ['Fiction', 'Fantasy', 'Drama', 'Romance', 'Thriller'];

  @ViewChild('genreInput') genreInput!: ElementRef<HTMLInputElement>;
  announcer = inject(LiveAnnouncer);

  ngOnInit(): void {
    this.updateFormValue();
  }

  constructor() {

    this.filteredGenres = this.genreCtrl.valueChanges.pipe(
      startWith(null),
      map((genre: string | null) => (genre ? this._filter(genre) : this.allGenres.slice())),
    );

    effect( () => {
      this.updateFormValue();
    })
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our genre
    if (value) {
      this.genres.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
    this.genreCtrl.setValue(null);
  }

  remove(genre: string): void {
    const index = this.genres.indexOf(genre);

    if (index >= 0) {
      this.genres.splice(index, 1);
      this.announcer.announce(`Removed ${genre}`);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.genres.push(event.option.viewValue);
    this.genreInput.nativeElement.value = '';
    this.genreCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allGenres.filter(genre => genre.toLowerCase().includes(filterValue));
  }

  errorMessage = '';

  updateFormValue(){
    if( this.formType === 'edit' ){

      this.productForm.setValue({
        title: this.productToBeEdited().title as string,
        author: this.productToBeEdited().author as string,
        publishedDate: this.productToBeEdited().publicationDate as number,
        genres: '',
        description: this.productToBeEdited().description as string,
        price: this.productToBeEdited().price as number,
        image: this.productToBeEdited().image as string,
        rating: this.productToBeEdited().rating as number
      });

      this.genres = [ ...this.productToBeEdited().genres as string[] ];
    }
  }


  handleFormSubmit(){

    this.formData = {
      title: this.productForm.value.title as string,
      author: this.productForm.value.author as string,
      publicationDate: this.productForm.value.publishedDate as number,
      description: this.productForm.value.description as string,
      price: this.productForm.value.price as number,
      genres: this.genres as string[],
      image: this.productForm.value.image as string,
      rating: this.productForm.value.rating as number
    }

    if( this.formType === 'new' ){
      this.productService.addProduct( this.formData )
        .subscribe( product => console.log( product , 'product added'));

      console.log( 'PRODUCT CREATED' );
      this.productForm.reset();

    } else if( this.formType === 'edit' ){
      this.productService.editProductById( this.productToBeEdited().id as number, this.formData )
        .subscribe( product => console.log( product, 'product edited' ) );
      console.log( 'PRODUCT SAVED & EDITED' );
    }

  }


}
