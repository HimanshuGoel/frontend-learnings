import { Component, Inject, ViewContainerRef } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { Mapper } from 'src/app/pipes/utility-mapper.pipe';
import { LOCAL_STORAGE } from '../../tokens/local-storage.token';
import { ReplayControlValueChanges } from '../../extensions/replay-control-value-changes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'frontend-learnings';

  readonly value = 125;
  readonly max = 100;

  capValue!: Mapper<number, number>;

  constructor(
    @Inject(LOCAL_STORAGE) private localStorage: Storage,
    private http: HttpClient,
    private viewContainerRef: ViewContainerRef
  ) {
    this.topicOne();
    this.topicThree();
  }

  private topicOne() {
    console.log('HG LOGS localStorage: ', this.localStorage);
  }

  private topicTwo() {
    const control = new UntypedFormControl();
    const value$ = new ReplayControlValueChanges(control);
    value$.subscribe((value) => console.log('HG LOGS value: ', value));
  }

  private topicThree() {
    this.capValue = (value: number, max: number) => Math.min(value, max);
  }

  topicSevenThrowClientError() {
    throw new Error('My Pretty Error');
  }

  topicSevenThrowServerError() {
    this.http.get('invalidUrl').subscribe();
  }

  async topic10LoadLazyComponent() {
    this.viewContainerRef.clear();
    const { LazyLoadedComponent } = await import('../lazy-loaded/lazy-loaded.component');
    let compRef = this.viewContainerRef.createComponent(LazyLoadedComponent);
  }
}
