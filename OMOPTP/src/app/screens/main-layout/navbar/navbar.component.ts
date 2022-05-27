import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ScreenWidthService } from 'src/app/common/screen-width.service';
import { BreakpointState } from "@angular/cdk/layout"
import { animate, state, style, transition, trigger } from '@angular/animations';
import { NavigationEnd, Router } from '@angular/router';

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
  public activatedRoute: boolean[] = [false, false, false, false]

  constructor(
    private screenWidthService: ScreenWidthService,
    private changeDetector: ChangeDetectorRef,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.screenWidthService.isBelowMd().subscribe((isBelowMd: BreakpointState) => {
      this.isBelowMd = isBelowMd.matches;
      this.changeDetector.detectChanges();
    })
    this.detectRoute(this.router.url);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) this.detectRoute(event.url)
    })
  }

  toggleMenu(): void {
    this.displayMenu = !this.displayMenu;
  }

  detectRoute(route: string): void {
    this.activatedRoute = [false, false, false, false]
    switch(route) {
      case '/frontpage':
        this.activatedRoute[0] = true;
        break;
      case '/apply':
        this.activatedRoute[1] = true;
        break;
      case '/team':
        this.activatedRoute[2] = true;
        break;
      case '/faq':
        this.activatedRoute[3] = true;
        break;
    } 
  }

}
