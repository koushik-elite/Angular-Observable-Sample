import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BehaviorTestComponent } from './behavior-test/behavior-test.component';
import { BehaviorTestChildComponent } from './behavior-test-child/behavior-test-child.component';
import { RouterModule, Routes } from '@angular/router';
import { FormtestComponent } from './formtest/formtest.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BehaviorTestService } from './behavior-test/behavior-test.service';
import { BehaviorSubject, AsyncSubject, ReplaySubject, Observable } from 'rxjs/RX';

const routes: Routes = [
  { path: 'behaviour/:id', component: BehaviorTestComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BehaviorTestComponent,
    BehaviorTestChildComponent,
    FormtestComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes),
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA  ],
  providers: [BehaviorTestService, {provide:BehaviorSubject, useValue: "BehaviorSubject"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
