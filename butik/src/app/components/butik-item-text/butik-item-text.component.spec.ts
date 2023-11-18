import { ComponentFixture, TestBed } from '@angular/core/testing';

import { butikItemTextComponent } from './butik-item-text.component';

describe('butikItemTextComponent', () => {
  let component: butikItemTextComponent;
  let fixture: ComponentFixture<butikItemTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ butikItemTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(butikItemTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
