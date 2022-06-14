import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponent } from '../dynamic/dynamic.component';

@Component({
  selector: 'app-dynamic-container',
  templateUrl: './dynamic-container.component.html',
  styleUrls: ['./dynamic-container.component.scss']
})
export class DynamicContainerComponent implements OnInit {
  @ViewChild('vc', { read: ViewContainerRef }) vc!: ViewContainerRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    const componentRed = this.vc.createComponent(DynamicComponent);
  }
}
