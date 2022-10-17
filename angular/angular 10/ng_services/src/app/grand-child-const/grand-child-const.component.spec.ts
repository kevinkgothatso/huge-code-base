import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandChildConstComponent } from './grand-child-const.component';

describe('GrandChildConstComponent', () => {
  let component: GrandChildConstComponent;
  let fixture: ComponentFixture<GrandChildConstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandChildConstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandChildConstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
