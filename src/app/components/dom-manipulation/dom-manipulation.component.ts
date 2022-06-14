import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dom-manipulation',
  templateUrl: './dom-manipulation.component.html',
  styleUrls: ['./dom-manipulation.component.scss'],
  styles: [
    `
      [highlight] {
        background: green;
        color: white;
      }
    `
  ]
})
export class DomManipulationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
