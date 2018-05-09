import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, OnDestroy } from '@angular/core';
import { BehaviorTestService } from './behavior-test.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-behavior-test',
  templateUrl: './behavior-test.component.html',
  styleUrls: ['./behavior-test.component.css'],
  providers: [],
})
export class BehaviorTestComponent implements OnInit, OnDestroy {

  public _bTestObsorb;
  public i = 0;
  public observable;
  public isStarted = false;
  timer;
  timerCount = 0;

  constructor(private _bTest: BehaviorTestService, private route: ActivatedRoute) {
    this._bTestObsorb = _bTest;
    this.observable = _bTest.currentTick;
    
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.timerCount = parseInt(params['id'], 10);
    });
  }


  go(t) {
    this.i = t;
    this._bTest.setTick(this.i);
    // this.i++;
    // setTimeout(this.go(), 1000); // callback
    if (t === this.timerCount) {
      this._bTest.setTickComplete();
      this.timer.unsubscribe();
      // this._bTest.
    }
  }

  startClick() {
    this.isStarted = true;
    this.timer = Observable.timer(2000, 1000);
    this.timer.subscribe(t => {
      this.go(t);
    });
    // this.go();
  }

  ngOnDestroy() {
    this.observable.unsubscribe();
  }


}
