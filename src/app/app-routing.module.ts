import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { DynamicContainerWithDirectiveComponent } from './components/dynamic-container-with-directive/dynamic-container-with-directive.component';
import { DynamicContainerComponent } from './components/dynamic-container/dynamic-container.component';

import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { ProxyConfComponent } from './components/proxy-conf/proxy-conf.component';
import { PreToPostBuildComponent } from './components/pre-to-post-build/pre-to-post-build.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'card-container',
    component: CardContainerComponent,
    title: 'Card Container'
  },
  {
    path: 'dynamic-container',
    component: DynamicContainerComponent,
    title: 'Dynamic Container'
  },
  {
    path: 'dynamic-container-with-directive',
    component: DynamicContainerWithDirectiveComponent,
    title: 'Dynamic Container with Directive'
  },
  {
    path: 'list-solid-principle',
    component: ListComponent,
    title: 'List SOLID principle'
  },
  {
    path: 'proxy-conf',
    component: ProxyConfComponent,
    title: 'Proxy Conf Component'
  },
  {
    path: 'pre-to-post-build',
    component: PreToPostBuildComponent,
    title: 'Pre to Post Build'
  },
  {
    path: 'content-dictionary',
    loadChildren: () =>
      import('./features/content-dictionary/content-dictionary.module').then(
        (m) => m.ContentDictionaryModule
      )
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
