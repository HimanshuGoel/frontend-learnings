import { Component, Injector, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListService } from '../../services/list.service';
import { AuthorListService } from '../../services/author-list.service';
import { ArticleListService } from '../../services/article-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  private listService: ListService;
  listTitle!: string;
  showNbOfArticlesDropdown!: boolean;
  list$!: Observable<string[]>;

  constructor(private injector: Injector) {
    this.listService = this.listServiceFactory('AUT');
  }

  ngOnInit(): void {
    this.list$ = this.listService.getList();
    this.listTitle = this.listService.listTitle;
    this.showNbOfArticlesDropdown = this.listService.showNbOfArticlesDropdown;
  }

  private listServiceFactory(listLevel: 'AUT' | 'ART'): ListService {
    switch (listLevel) {
      case 'AUT':
        return this.injector.get(AuthorListService);
      case 'ART':
        return this.injector.get(ArticleListService);
    }
  }
}
