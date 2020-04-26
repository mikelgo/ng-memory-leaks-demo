import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DummyService {
  val$ = new BehaviorSubject(42);

  constructor() {}
}
