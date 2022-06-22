import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalErrorHandler } from './handlers/global-error.handler';
import { UtilityMapperPipe } from './pipes/utility-mapper.pipe';
import { ServerErrorInterceptor } from './interceptors/service-error.interceptor';
import { DomManipulationComponent } from './components/dom-manipulation/dom-manipulation.component';
import { HighlighterDirective } from './directives/highlighter.directive';
import { DomStructuralManipulationComponent } from './components/dom-structural-manipulation/dom-structural-manipulation.component';
import { ChildComponent } from './components/child/child.component';
import { TitleStrategy } from '@angular/router';
import { AppPrefixTitleStrategy } from './strategies/app-prefix-title.strategy';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { DynamicComponent } from './components/dynamic/dynamic.component';
import { DynamicContainerComponent } from './components/dynamic-container/dynamic-container.component';
import { DynamicContainerWithDirectiveComponent } from './components/dynamic-container-with-directive/dynamic-container-with-directive.component';
import { ComponentContainerDirective } from './directives/component-container.directive';
import { ListComponent } from './components/list/list.component';
import { ProxyConfComponent } from './components/proxy-conf/proxy-conf.component';
import { PreToPostBuildComponent } from './components/pre-to-post-build/pre-to-post-build.component';

@NgModule({
  declarations: [
    AppComponent,
    UtilityMapperPipe,
    DomManipulationComponent,
    HighlighterDirective,
    DomStructuralManipulationComponent,
    ChildComponent,
    HomeComponent,
    CardComponent,
    CardContainerComponent,
    DynamicComponent,
    DynamicContainerComponent,
    DynamicContainerWithDirectiveComponent,
    ComponentContainerDirective,
    ListComponent,
    ProxyConfComponent,
    PreToPostBuildComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorInterceptor,
      multi: true
    },
    {
      provide: TitleStrategy,
      useClass: AppPrefixTitleStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
