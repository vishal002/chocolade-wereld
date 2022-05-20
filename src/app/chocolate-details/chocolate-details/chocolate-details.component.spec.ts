import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChocolateDetailsComponent } from './chocolate-details.component';

describe('ChocolateDetailsComponent', () => {
  let component: ChocolateDetailsComponent;
  let fixture: ComponentFixture<ChocolateDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChocolateDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChocolateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
