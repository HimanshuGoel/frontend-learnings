import { Injectable, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynamicContainerShareService {
  createListeners: any = [];
  destroyListeners: any = [];

  onContainerCreated(fn: (vc: ViewContainerRef) => void) {
    this.createListeners.push(fn);
  }

  onContainerDestroyed(fn: (vc: ViewContainerRef) => void) {
    this.destroyListeners.push(fn);
  }

  registerContainer(container: ViewContainerRef) {
    console.log('HG Logs - registering container');
    this.createListeners.forEach((fn: (vc: ViewContainerRef) => void) => {
      fn(container);
    });
  }

  destroyContainer(container: ViewContainerRef) {
    this.destroyListeners.forEach((fn: (vc: ViewContainerRef) => void) => {
      fn(container);
    });
  }
}
