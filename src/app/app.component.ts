import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs';
import * as AppActions from './store/app.actions'
import * as AOS from 'aos'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private store: Store){}

  ngOnInit(): void {
    AOS.init();
  }
  tasks = [
    {},
    {}
  ]
  title = 'FinalProject';

  isEven(n: number) {
    n = Number(n);
    return n === 0 || !!(n && !(n%2));
  }
}
