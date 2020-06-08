import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockviewerComponent } from './stockviewer.component';

describe('StockviewerComponent', () => {
  let component: StockviewerComponent;
  let fixture: ComponentFixture<StockviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
