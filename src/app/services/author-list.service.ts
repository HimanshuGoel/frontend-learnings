import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ListService } from './list.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorListService extends ListService {
  public listTitle = 'Weekly best authors!';
  public showNbOfArticlesDropdown = true;

  public getList(): Observable<string[]> {
    return of(['John Doe', 'Jane Doe', 'Jack Doe']);
  }
}
