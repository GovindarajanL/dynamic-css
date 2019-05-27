import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispCompComponent } from './disp-comp.component';

describe('DispCompComponent', () => {
  let component: DispCompComponent;
  let fixture: ComponentFixture<DispCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
