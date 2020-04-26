import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css'],
})
export class SubComponent implements OnInit {
  subject = new BehaviorSubject(42);
  constructor() {}

  ngOnInit() {
    this.subject.subscribe((v) => {
      const foo = v;
    });
  }
}
