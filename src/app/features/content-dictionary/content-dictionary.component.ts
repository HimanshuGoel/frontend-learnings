import { Component } from '@angular/core';
import { ContentDictionaryService } from './content-dictionary.service';

@Component({
  selector: 'app-content-dictionary',
  templateUrl: './content-dictionary.component.html',
  styleUrls: ['./content-dictionary.component.scss']
})
export class ContentDictionaryComponent {
  public content: any = null;

  constructor(private contentDictionaryService: ContentDictionaryService) {
    this.content = this.contentDictionaryService.value();
  }
}
