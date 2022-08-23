import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StracturalDirComponent } from './stractural-dir.component';

describe('StracturalDirComponent', () => {
  let component: StracturalDirComponent;
  let fixture: ComponentFixture<StracturalDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StracturalDirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StracturalDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
