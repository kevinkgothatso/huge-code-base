import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherComponent } from './other.component';

describe('OtherComponent', () => {
  let component: OtherComponent;
  let fixture: ComponentFixture<OtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have variable 'name'`,()=>{
    const fixture = TestBed.createComponent(OtherComponent);
      const app = fixture.componentInstance;
      expect(app.name).toEqual("other component");
  });

});
