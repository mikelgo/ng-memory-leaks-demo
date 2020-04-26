import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-sub></app-sub>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng-memory-leak-demo';
  public hide = false;
  ngOnInit() {}
}
