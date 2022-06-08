import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { DynamicComponent } from '../dynamic/dynamic.component';

@Component({
  selector: 'app-dynamic-container',
  templateUrl: './dynamic-container.component.html',
  styleUrls: ['./dynamic-container.component.scss']
})
export class DynamicContainerComponent implements OnInit {
  @ViewChild('vc', { read: ViewContainerRef }) vc!: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    // const factory = this.cfr.resolveComponentFactory(DynamicComponent);
    const component = this.vc.createComponent(DynamicComponent);
  }
}
