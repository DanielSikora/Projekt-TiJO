import { ComponentFixture, TestBed } from '@angular/core/testing';

import { butikItemImageComponent } from './butik-item-image.component';

describe('butikItemImageComponent', () => {
  let component: butikItemImageComponent;
  let fixture: ComponentFixture<butikItemImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ butikItemImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(butikItemImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
