import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentProvComponent } from './component-prov.component';

describe('ComponentProvComponent', () => {
  let component: ComponentProvComponent;
  let fixture: ComponentFixture<ComponentProvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentProvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentProvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
