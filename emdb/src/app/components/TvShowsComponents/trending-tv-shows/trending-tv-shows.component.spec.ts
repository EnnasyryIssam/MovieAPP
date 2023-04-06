import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingTvShowsComponent } from './trending-tv-shows.component';

describe('TrendingTvShowsComponent', () => {
  let component: TrendingTvShowsComponent;
  let fixture: ComponentFixture<TrendingTvShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingTvShowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingTvShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
