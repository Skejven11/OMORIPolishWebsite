import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ScreenWidthService } from 'src/app/common/screen-width.service';
import { BreakpointState } from "@angular/cdk/layout"
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  animations: [
    trigger('popMenu', [
      transition(':enter', [
        style({opacity: 0}),
        animate('200ms')
      ]),
      transition(':leave', [
        animate('200ms', style({'opacity': 0}))
      ]),
    ])
  ]
})
export class NavbarComponent implements OnInit {
  public isBelowMd: boolean = false;
  public displayMenu: boolean = false;

  constructor(
    private screenWidthService: ScreenWidthService,
    private changeDetector: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.screenWidthService.isBelowMd().subscribe((isBelowMd: BreakpointState) => {
      this.isBelowMd = isBelowMd.matches;
      this.changeDetector.detectChanges();
    })
  }

  toggleMenu(): void {
    this.displayMenu = !this.displayMenu;
  }

}
