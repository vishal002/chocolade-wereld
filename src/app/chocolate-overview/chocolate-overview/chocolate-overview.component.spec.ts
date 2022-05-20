import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChocolateOverviewComponent } from './chocolate-overview.component';

describe('ChocolateOverviewComponent', () => {
  let component: ChocolateOverviewComponent;
  let fixture: ComponentFixture<ChocolateOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChocolateOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChocolateOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
