import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleProviderChildComponent } from './module-provider-child.component';

describe('ModuleProviderChildComponent', () => {
  let component: ModuleProviderChildComponent;
  let fixture: ComponentFixture<ModuleProviderChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleProviderChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleProviderChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
