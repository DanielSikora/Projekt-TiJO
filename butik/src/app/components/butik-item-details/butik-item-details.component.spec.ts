import { ComponentFixture, TestBed } from '@angular/core/testing';

import { butikItemDetailsComponent } from './butik-item-details.component';

describe('butikItemDetailsComponent', () => {
  let component: butikItemDetailsComponent;
  let fixture: ComponentFixture<butikItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ butikItemDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(butikItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
