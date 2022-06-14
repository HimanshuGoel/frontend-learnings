import { AbstractControl, AbstractControlDirective } from '@angular/forms';

import { Observable, startWith } from 'rxjs';

export class ReplayControlValueChanges<T> extends Observable<T> {
  constructor(control: AbstractControl | AbstractControlDirective) {
    super((subscriber) => {
      if (!control.valueChanges) {
        throw new Error('Control does not have valueChanges observable');
      }
      control.valueChanges.pipe(startWith(control.value)).subscribe(subscriber);
    });
  }
}
