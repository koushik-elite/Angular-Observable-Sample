import { Component, OnInit } from '@angular/core';
import { PrintsService } from './prints.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PrintsService],
})
export class AppComponent implements OnInit {
  title = 'app';
  private test = 'hello';
  public description = ' world';
  public rand = Math.floor((Math.random() * 100) + 1);

  constructor(public _testc: PrintsService) {
    this.description = this.test + ' constructor world';
  }

  print(data = 'test') {
    this.description = this.description + data + this._testc.printS();
  }

  ngOnInit() {
    this.print();
  }

}
