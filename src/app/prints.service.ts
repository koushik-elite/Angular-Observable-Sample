import { Injectable } from '@angular/core';

@Injectable()
export class PrintsService {

  constructor() { }

  public printS() {
    return 'PrintsService : hello world';
  }

}
