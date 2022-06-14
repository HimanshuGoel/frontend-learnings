import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentDictionaryComponent } from './content-dictionary.component';

const routes: Routes = [{ path: '', component: ContentDictionaryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentDictionaryRoutingModule {}
