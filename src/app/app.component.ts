import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  template: `<app-sub *ngIf="hide"></app-sub>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng-memory-leak-demo';
  public hide = false;
  ngOnInit() {
    // setInterval(() => ((this.hide = !this.hide), 50));
    interval(50)
      // .pipe(take(10))
      .subscribe((_) => (this.hide = !this.hide));
  }
}
