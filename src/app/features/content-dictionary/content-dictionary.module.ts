import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentDictionaryRoutingModule } from './content-dictionary-routing.module';
import { ContentDictionaryComponent } from './content-dictionary.component';

@NgModule({
  declarations: [ContentDictionaryComponent],
  imports: [CommonModule, ContentDictionaryRoutingModule]
})
export class ContentDictionaryModule {}

// Note - Features module don't depend on any other features just on services provided by CoreModule
// and components provided by SharedModule.
