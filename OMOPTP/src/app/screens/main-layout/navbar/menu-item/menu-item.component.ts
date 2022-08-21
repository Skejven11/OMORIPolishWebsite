import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {
  @Input() link: string = "";
  @Input() text: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
