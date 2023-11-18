import { ComponentFixture, TestBed } from '@angular/core/testing';

import { butikItemComponent } from './butik-item.component';

describe('butikItemComponent', () => {
  let component: butikItemComponent;
  let fixture: ComponentFixture<butikItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ butikItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(butikItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
