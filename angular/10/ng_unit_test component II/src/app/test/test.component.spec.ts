import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Should render date element", ()=>{
      const component = fixture.nativeElement;
      expect(component.querySelector('.content').
      textContent).toContain('2021/3/2');
  });

  it("should contain welcome message",()=>{
      expect(component.title).toEqual('Welcome to APP')
  });
});

//multiple describes
describe('',()=>{

})
