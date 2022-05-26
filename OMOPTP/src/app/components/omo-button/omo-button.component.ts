import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'omo-button',
  templateUrl: './omo-button.component.html',
})
export class OmoButtonComponent implements OnInit {
  @Input() link: string = "";
  @Input() text: string = "";
  @Input() isActive: boolean = false;
  public isMouseOver: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
