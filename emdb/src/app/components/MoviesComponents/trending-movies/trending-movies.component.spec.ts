import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingdMoviesComponent } from './trending-movies.component';

describe('TrendingdMoviesComponent', () => {
  let component: TrendingdMoviesComponent;
  let fixture: ComponentFixture<TrendingdMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrendingdMoviesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrendingdMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
