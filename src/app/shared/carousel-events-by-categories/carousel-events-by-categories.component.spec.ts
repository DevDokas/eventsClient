import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselEventsByCategoriesComponent } from './carousel-events-by-categories.component';

describe('CarouselEventsByCategoriesComponent', () => {
  let component: CarouselEventsByCategoriesComponent;
  let fixture: ComponentFixture<CarouselEventsByCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselEventsByCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselEventsByCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
