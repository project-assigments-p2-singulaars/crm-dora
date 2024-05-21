import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCustomerFormPageComponent } from './new-customer-form-page.component';

describe('NewCustomerFormPageComponent', () => {
  let component: NewCustomerFormPageComponent;
  let fixture: ComponentFixture<NewCustomerFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCustomerFormPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewCustomerFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
