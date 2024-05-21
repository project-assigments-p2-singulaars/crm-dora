import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrderButtonComponent } from './new-order-button.component';

describe('NewOrderButtonComponent', () => {
  let component: NewOrderButtonComponent;
  let fixture: ComponentFixture<NewOrderButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewOrderButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewOrderButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
