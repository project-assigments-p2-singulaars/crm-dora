import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductFormPageComponent } from './new-product-form-page.component';

describe('NewProductFormPageComponent', () => {
  let component: NewProductFormPageComponent;
  let fixture: ComponentFixture<NewProductFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewProductFormPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewProductFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
