import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'omo-button',
  templateUrl: './omo-button.component.html',
})
export class OmoButtonComponent implements OnInit {
  @Output() onButtonClick = new EventEmitter<any>();
  @Input() link: string = "";
  @Input() text: string = "";
  @Input() isActive: boolean = false;
  public isMouseOver: boolean = false;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onClick() {
    if (this.link != "") this.router.navigate([this.link])
    else this.onButtonClick.emit();
  }

}
