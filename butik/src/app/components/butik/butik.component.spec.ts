import { ComponentFixture, TestBed } from '@angular/core/testing';

import { butikComponent } from './butik.component';

describe('butikComponent', () => {
  let component: butikComponent;
  let fixture: ComponentFixture<butikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ butikComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(butikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
