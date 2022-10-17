import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleProviderComponent } from './module-provider.component';

describe('ModuleProviderComponent', () => {
  let component: ModuleProviderComponent;
  let fixture: ComponentFixture<ModuleProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
