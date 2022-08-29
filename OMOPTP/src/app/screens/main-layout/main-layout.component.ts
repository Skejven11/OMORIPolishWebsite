import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ScreenWidthService } from 'src/app/common/screen-width.service';
import { BreakpointState } from "@angular/cdk/layout"
import { routerAnimation, contentAnimation, logoAnimation, adAnimation } from 'src/app/common/animations';
import { ChildrenOutletContexts } from '@angular/router';
import { faWindows } from '@fortawesome/free-brands-svg-icons';
import { LogoComponent } from './logo/logo.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styles: [
    ':host { position: relative }'
  ],
  animations: [
    routerAnimation,
    contentAnimation,
    logoAnimation,
    adAnimation
  ]
})
export class MainLayoutComponent implements OnInit {
  @ViewChild('logo') logo: LogoComponent;
  public isBelowMd: boolean = false;
  public isBelowLg: boolean = false;

  public popeLine;
  public isPopeAlive: boolean = false;

  public showAd: boolean = true;

  public firstBulb: number = 0;
  public secondBulb: number = 0;
  public thirdBulb: number = 0;
  public fourthBulb: number = 0;
  public popeNumber: number = 0;

  public isReloading: boolean = (window.performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming).type === "reload";

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

    this.popeLine = new Audio();
    this.popeLine.src = "../../../assets/sounds/pope.mp4";
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  onClickFirst() {
    this.firstBulb++;
    if (this.checkIfTen(this.firstBulb)) this.firstBulb = 0;
    this.checkIfYellow();
  }

  onClickSecond() {
    this.secondBulb++;
    if (this.checkIfTen(this.secondBulb)) this.secondBulb = 0;
    this.checkIfYellow();
  }

  onClickThird() {
    this.thirdBulb++;
    if (this.checkIfTen(this.thirdBulb)) this.thirdBulb = 0;
    this.checkIfYellow();
  }

  onClickFourth() {
    this.fourthBulb++;
    if (this.checkIfTen(this.fourthBulb)) this.fourthBulb = 0;
    this.checkIfYellow();
  }
  
  checkIfTen (number: number) {
    if (number === 10) return true;
    else return false;
  }

  checkIfYellow() {
    var funnyNumber: string = "" + this.firstBulb + this.secondBulb + this.thirdBulb + this.fourthBulb;
    if (funnyNumber === "2137") {
      this.popeLine.load();
      this.popeLine.play();
      this.logo.changeToPope();
      this.isPopeAlive = true;
    }
  }

  hideAd() {
    this.showAd = false;
  }

}
