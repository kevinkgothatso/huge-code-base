import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandChildViewComponent } from './grand-child-view.component';

describe('GrandChildViewComponent', () => {
  let component: GrandChildViewComponent;
  let fixture: ComponentFixture<GrandChildViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandChildViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandChildViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
