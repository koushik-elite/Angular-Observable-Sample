import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormtestComponent } from './formtest.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

describe('FormtestComponent', () => {
  let component: FormtestComponent;
  let fixture: ComponentFixture<FormtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormtestComponent ],imports: [ReactiveFormsModule, FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
