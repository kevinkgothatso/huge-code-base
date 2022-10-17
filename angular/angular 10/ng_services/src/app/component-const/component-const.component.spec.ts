import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentConstComponent } from './component-const.component';

describe('ComponentConstComponent', () => {
  let component: ComponentConstComponent;
  let fixture: ComponentFixture<ComponentConstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentConstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentConstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
