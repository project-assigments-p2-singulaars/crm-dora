import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCustomerButtonComponent } from './new-customer-button.component';

describe('NewCustomerButtonComponent', () => {
  let component: NewCustomerButtonComponent;
  let fixture: ComponentFixture<NewCustomerButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCustomerButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewCustomerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
