import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css'],
})
export class SubComponent implements OnInit {
  arr = [];
  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 100000; ++i) {
      this.arr.push(Math.random());
    }
  }
}
