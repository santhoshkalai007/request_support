import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarratingComponent } from './starrating.component';

describe('StarratingComponent', () => {
  let component: StarratingComponent;
  let fixture: ComponentFixture<StarratingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarratingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StarratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
