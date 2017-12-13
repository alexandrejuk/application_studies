import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoBoyComponent } from './moto-boy.component';

describe('MotoBoyComponent', () => {
  let component: MotoBoyComponent;
  let fixture: ComponentFixture<MotoBoyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotoBoyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotoBoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
