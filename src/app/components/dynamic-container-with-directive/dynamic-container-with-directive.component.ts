import { Component, ViewContainerRef } from '@angular/core';
import { DynamicContainerShareService } from '../../services/dynamic-container-share.service';
import { DynamicComponent } from '../dynamic/dynamic.component';

@Component({
  selector: 'app-dynamic-container-with-directive',
  templateUrl: './dynamic-container-with-directive.component.html',
  styleUrls: ['./dynamic-container-with-directive.component.scss']
})
export class DynamicContainerWithDirectiveComponent {
  vc!: ViewContainerRef | undefined;
  constructor(shared: DynamicContainerShareService) {
    shared.onContainerCreated((container) => {
      this.vc = container;
      this.vc.createComponent(DynamicComponent);
    });

    shared.onContainerDestroyed(() => {
      this.vc = undefined;
    });
  }
}
