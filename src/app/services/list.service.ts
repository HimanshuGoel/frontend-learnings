import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class ListService {
  public listLevel$!: Observable<string>;
  public nbArticles$!: Observable<number>;

  abstract listTitle: string;
  abstract showNbOfArticlesDropdown: boolean;

  constructor() {
    this.listLevel$ = of('A');
    this.nbArticles$ = of(5);
  }

  abstract getList(): Observable<string[]>;
}
