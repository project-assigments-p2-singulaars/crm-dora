import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrderFormPageComponent } from './new-order-form-page.component';

describe('NewOrderFormPageComponent', () => {
  let component: NewOrderFormPageComponent;
  let fixture: ComponentFixture<NewOrderFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewOrderFormPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewOrderFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
