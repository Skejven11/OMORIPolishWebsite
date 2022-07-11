import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ScreenWidthService } from 'src/app/common/screen-width.service';
import { BreakpointState } from "@angular/cdk/layout"
import { routerAnimation, contentAnimation, logoAnimation } from 'src/app/common/animations';
import { ChildrenOutletContexts } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  animations: [
    routerAnimation,
    contentAnimation,
    logoAnimation
  ]
})
export class MainLayoutComponent implements OnInit {
  public isBelowMd: boolean = false;
  public isBelowLg: boolean = false;

  constructor(
    private screenWidthService: ScreenWidthService,
    private changeDetector: ChangeDetectorRef,
    private contexts: ChildrenOutletContexts
  ) { }

  ngOnInit(): void {
    this.screenWidthService.isBelowMd().subscribe((isBelowMd: BreakpointState) => {
      this.isBelowMd = isBelowMd.matches;
      this.changeDetector.detectChanges();
    })

    this.screenWidthService.isBelowLg().subscribe((isBelowLg: BreakpointState) => {
      this.isBelowLg = isBelowLg.matches;
      this.changeDetector.detectChanges();
    })
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

}
