import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ScreenWidthService } from 'src/app/common/screen-width.service';
import { BreakpointState } from "@angular/cdk/layout";
import { CanvastarComponent } from 'src/app/components/canvastar/canvastar.component';
import { AppTheme } from 'src/app/common/types';
import { Select } from '@ngxs/store';
import { ThemeState } from 'src/app/state/theme.state';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'logo',
  templateUrl: './logo.component.html',
})
export class LogoComponent implements OnInit, OnDestroy {
  AppTheme = AppTheme;

  @Select(ThemeState.theme) appTheme$: Observable<{theme: AppTheme}>

  @ViewChild('canvastar') canvastar!: CanvastarComponent;

  public isBelowMd: boolean = false;
  public isBelowLg: boolean = false;
  public bunny: string = "bunny";

  private themeSubscription: Subscription;

  constructor(
    private screenWidthService: ScreenWidthService,
  ) { }

  ngOnInit(): void {
    this.screenWidthService.isBelowMd().subscribe((isBelowMd: BreakpointState) => {
      this.isBelowMd = isBelowMd.matches;
    })

    this.screenWidthService.isBelowLg().subscribe((isBelowLg: BreakpointState) => {
      this.isBelowLg = isBelowLg.matches;
    })

    this.themeSubscription = this.appTheme$.subscribe(result => {
      switch(result.theme) {
        case AppTheme.scary:
          this.bunny = "scary_bunny"
          break;
        case AppTheme.normal:
          this.bunny = "bunny"
          break;
        case AppTheme.pope:
          this.bunny = "aubrey2137"
          break;
        case AppTheme.balbinka:
          this.bunny = 'balbinkaLogo'
          break;
      }
    })
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  callCanvas() {
    this.canvastar.launchStar();
  }
}
