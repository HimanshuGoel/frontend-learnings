import { Component, Injector, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleListService } from 'src/app/services/article-list.service';
import { AuthorListService } from 'src/app/service/author-list.service';
import { ListService } from 'src/app/service/list.service';

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
