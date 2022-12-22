import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPaginatorIIComponent } from './card-paginator-ii.component';

describe('CardPaginatorIIComponent', () => {
  let component: CardPaginatorIIComponent;
  let fixture: ComponentFixture<CardPaginatorIIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPaginatorIIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPaginatorIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
