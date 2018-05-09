import { Injectable } from '@angular/core';
import { BehaviorSubject, AsyncSubject, ReplaySubject, Observable } from 'rxjs/RX';

@Injectable()
export class BehaviorTestService {

  currentTick: any;
  currentAsycTick: any;
  currentReplayTick: any;

  constructor(private _currentTick: BehaviorSubject<number> = new BehaviorSubject<number>(0), 
  private _currentAsycTick: AsyncSubject<number>, private _currentReplayTick: ReplaySubject<number>, ) { 
    this.currentTick = _currentTick;
    this.currentAsycTick = _currentAsycTick;
    this.currentReplayTick = _currentReplayTick;
  }

  getTick() {

  }

  setTick(n) {
    this.currentTick.next(n);
    this.currentAsycTick.next(n);
    this.currentReplayTick.next(n);
  }

  setTickComplete() {
    this.currentTick.complete();
    this.currentAsycTick.complete();
    this.currentReplayTick.complete();
  }

}
