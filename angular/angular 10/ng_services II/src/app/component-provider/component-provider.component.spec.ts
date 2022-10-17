import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentProviderComponent } from './component-provider.component';

describe('ComponentProviderComponent', () => {
  let component: ComponentProviderComponent;
  let fixture: ComponentFixture<ComponentProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
