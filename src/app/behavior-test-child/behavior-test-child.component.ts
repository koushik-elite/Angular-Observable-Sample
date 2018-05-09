import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BehaviorTestService } from '../behavior-test/behavior-test.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-behavior-test-child',
  templateUrl: './behavior-test-child.component.html',
  styleUrls: ['./behavior-test-child.component.css'],
})
export class BehaviorTestChildComponent implements OnInit, OnDestroy {

  public _bTestObsorb;
  @Input() public typeO = '';
  public observable;
  public data = [];

  constructor(private _bTest: BehaviorTestService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    if (this.typeO === 'async') {
      this.observable = this._bTest.currentAsycTick;
      this.typeO = "AsyncSubject RxJs";
    } else if (this.typeO === 'replay') {
      this.observable = this._bTest.currentReplayTick;
      this.typeO = "ReplaySubject RxJs";
    } else {
      this.observable = this._bTest.currentTick;
      this.typeO = "BehaviorSubject RxJs";
    }
  }

  subscribe() {
    this.observable.subscribe(x => {
      this.data.push(x);
    });
  }

  ngOnDestroy() {
    this.observable.unsubscribe();
  }


}
