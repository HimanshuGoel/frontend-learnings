import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalErrorHandler } from './handlers/global-error.handler';
import { UtilityMapperPipe } from './pipes/utility-mapper.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServerErrorInterceptor } from './interceptors/service-error.interceptor';
import { MatButtonModule } from '@angular/material/button';
import { DomManipulationComponent } from './components/dom-manipulation/dom-manipulation.component';
import { HighlighterDirective } from './directives/highlighter.directive';
import { DomStructuralManipulationComponent } from './components/dom-structural-manipulation/dom-structural-manipulation.component';
import { ChildComponent } from './components/child/child.component';

@NgModule({
  declarations: [AppComponent, UtilityMapperPipe, DomManipulationComponent, HighlighterDirective, DomStructuralManipulationComponent, ChildComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    HttpClientModule,
    MatButtonModule,
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
