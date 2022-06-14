import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {
  @Input() appHighlight!: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setAttribute(this.element.nativeElement, this.appHighlight, '');
  }
}
