import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { DynamicContainerShareService } from '../../service/dynamic-container-share.service';
import { DynamicComponent } from '../dynamic/dynamic.component';

@Component({
  selector: 'app-dynamic-container-with-directive',
  templateUrl: './dynamic-container-with-directive.component.html',
  styleUrls: ['./dynamic-container-with-directive.component.scss']
})
export class DynamicContainerWithDirectiveComponent {
  vc!: ViewContainerRef | undefined;
  constructor(private r: ComponentFactoryResolver, shared: DynamicContainerShareService) {
    shared.onContainerCreated((container) => {
      this.vc = container;
      // const factory = this.r.resolveComponentFactory(DynamicComponent);
      this.vc.createComponent(DynamicComponent);
    });

    shared.onContainerDestroyed(() => {
      this.vc = undefined;
    });
  }
}
