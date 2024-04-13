import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonenumberComponent } from './phonenumber.component';

describe('PhonenumberComponent', () => {
  let component: PhonenumberComponent;
  let fixture: ComponentFixture<PhonenumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhonenumberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhonenumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
