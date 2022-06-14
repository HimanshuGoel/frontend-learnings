import { Directive, ViewContainerRef } from '@angular/core';
import { DynamicContainerShareService } from '../services/dynamic-container-share.service';

@Directive({
  selector: '[appComponentContainer]'
})
export class ComponentContainerDirective {
  constructor(vc: ViewContainerRef, shared: DynamicContainerShareService) {
    // vc.constructor.name === 'ViewContainerRef_';
    shared.registerContainer(vc);
  }
}
