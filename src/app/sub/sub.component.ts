import { Component, OnInit } from '@angular/core';
import { DummyService } from '../dummy.service';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css'],
})
export class SubComponent implements OnInit {
  value = 0;
  constructor(private service: DummyService) {}

  ngOnInit() {
    this.service.val$.subscribe((v) => {
      this.value = v;
    });
  }
}
