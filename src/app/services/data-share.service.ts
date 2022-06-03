import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataShareService {
  private readonly stream$$ = new Subject<string>();

  readonly stream$ = this.stream$$.asObservable();

  // Below approach also make an Observable based on Subject
  // but if you want to add new logic, it is easy
  // to add operators into pipe
  // readonly stream$ = this.stream$$.pipe();

  constructor() {}

  update(message: string) {
    this.stream$$.next(message);
  }
}
