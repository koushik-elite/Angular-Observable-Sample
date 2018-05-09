import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorTestComponent } from './behavior-test.component';
import { BehaviorTestChildComponent } from '../behavior-test-child/behavior-test-child.component';
import { BehaviorTestService } from './behavior-test.service';
import { BehaviorSubject, AsyncSubject, ReplaySubject, Observable } from 'rxjs/RX';
import { ActivatedRoute } from '@angular/router';

describe('BehaviorTestComponent', () => {
  let component: BehaviorTestComponent;
  let fixture: ComponentFixture<BehaviorTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BehaviorTestChildComponent, BehaviorTestComponent ],
      providers: [BehaviorTestService, 
        {provide:BehaviorSubject, useValue: "BehaviorSubject"},
        {provide:AsyncSubject, useValue: "AsyncSubject"},
        {provide:ReplaySubject, useValue: "ReplaySubject"},
        {provide:ActivatedRoute, useValue: "ActivatedRoute"}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviorTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
