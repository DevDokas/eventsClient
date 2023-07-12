import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCategoriesHolderComponent } from './carousel-categories-holder.component';

describe('CarouselCategoriesHolderComponent', () => {
  let component: CarouselCategoriesHolderComponent;
  let fixture: ComponentFixture<CarouselCategoriesHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselCategoriesHolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselCategoriesHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
