import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DptCardComponent } from './dpt-card.component';

describe('DptCardComponent', () => {
  let component: DptCardComponent;
  let fixture: ComponentFixture<DptCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DptCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DptCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
