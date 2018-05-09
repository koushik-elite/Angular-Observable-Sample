import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorTestChildComponent } from './behavior-test-child.component';
import { BehaviorTestService } from '../behavior-test/behavior-test.service';
import { BehaviorSubject, AsyncSubject, ReplaySubject, Observable } from 'rxjs/RX';
import { ActivatedRoute } from '@angular/router';

describe('BehaviorTestChildComponent', () => {
  let component: BehaviorTestChildComponent;
  let fixture: ComponentFixture<BehaviorTestChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BehaviorTestChildComponent ], providers: [BehaviorTestService, 
        {provide:BehaviorSubject, useValue: "BehaviorSubject"},
        {provide:AsyncSubject, useValue: "AsyncSubject"},
        {provide:ReplaySubject, useValue: "ReplaySubject"},
        {provide:ActivatedRoute, useValue: "ActivatedRoute"}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviorTestChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
