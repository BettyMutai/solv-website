import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionValueComponent } from './vision-value.component';

describe('VisionValueComponent', () => {
  let component: VisionValueComponent;
  let fixture: ComponentFixture<VisionValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisionValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisionValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
