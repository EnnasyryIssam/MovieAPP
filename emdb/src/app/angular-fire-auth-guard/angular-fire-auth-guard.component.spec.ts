import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFireAuthGuardComponent } from './angular-fire-auth-guard.component';

describe('AngularFireAuthGuardComponent', () => {
  let component: AngularFireAuthGuardComponent;
  let fixture: ComponentFixture<AngularFireAuthGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularFireAuthGuardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularFireAuthGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
