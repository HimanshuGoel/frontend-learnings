import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable()
export class AppPrefixTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }
  override updateTitle(routerState: RouterStateSnapshot): void {
    const appTitle = 'Frontend Learnings';
    const title = this.buildTitle(routerState);
    this.title.setTitle(`${appTitle} - ${title}`);
  }
}
