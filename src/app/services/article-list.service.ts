import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ListService } from './list.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleListService extends ListService {
  public listTitle = 'Interesting articles!';
  public showNbOfArticlesDropdown = false;

  public getList(): Observable<string[]> {
    return of(['Article 1', 'Article 2', 'Article 3']);
  }
}
