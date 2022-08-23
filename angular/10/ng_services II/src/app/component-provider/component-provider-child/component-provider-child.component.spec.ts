import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentProviderChildComponent } from './component-provider-child.component';

describe('ComponentProviderChildComponent', () => {
  let component: ComponentProviderChildComponent;
  let fixture: ComponentFixture<ComponentProviderChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentProviderChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentProviderChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
