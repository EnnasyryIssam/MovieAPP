import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeFavoritesComponent } from './some-favorites.component';

describe('SomeFavoritesComponent', () => {
  let component: SomeFavoritesComponent;
  let fixture: ComponentFixture<SomeFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomeFavoritesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SomeFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
