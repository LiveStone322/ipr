import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExplorerComponent } from './card-explorer.component';

describe('CardExplorerComponent', () => {
  let component: CardExplorerComponent;
  let fixture: ComponentFixture<CardExplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardExplorerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
