import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProviderChildComponent } from './view-provider-child.component';

describe('ViewProviderChildComponent', () => {
  let component: ViewProviderChildComponent;
  let fixture: ComponentFixture<ViewProviderChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProviderChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProviderChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
