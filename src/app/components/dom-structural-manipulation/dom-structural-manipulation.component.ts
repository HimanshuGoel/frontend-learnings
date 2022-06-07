import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-dom-structural-manipulation',
  templateUrl: './dom-structural-manipulation.component.html',
  styleUrls: ['./dom-structural-manipulation.component.scss'],
})
export class DomStructuralManipulationComponent implements OnInit {
  @ViewChildren('child', { read: ElementRef })
  childComp!: QueryList<ElementRef>;

  @ViewChild('viewContainer', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;

  @ViewChild(TemplateRef) template!: TemplateRef<null>;

  constructor(private renderer: Renderer2, private host: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewChecked() {
    console.log('Child components count', this.childComp.length);
  }

  ngAfterViewInit() {
    this.viewContainer.createEmbeddedView(this.template);
  }

  removeChild() {
    this.viewContainer.remove();
  }
}
