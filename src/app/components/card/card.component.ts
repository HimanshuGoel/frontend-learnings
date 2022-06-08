import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
    `
      :host {
        display: block;
        padding: 32px;
        border: 1px solid black;
        border-radius: 8px;
      }
    `
  ],
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  name = 'Card';

  constructor() {}

  ngOnInit(): void {}
}
