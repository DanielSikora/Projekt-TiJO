import { ComponentFixture, TestBed } from '@angular/core/testing';

import { butikHomeComponent } from './butik-home.component';

describe('butikHomeComponent', () => {
  let component: butikHomeComponent;
  let fixture: ComponentFixture<butikHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ butikHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(butikHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
