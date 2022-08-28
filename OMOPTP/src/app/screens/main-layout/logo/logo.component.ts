import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ScreenWidthService } from 'src/app/common/screen-width.service';
import { BreakpointState } from "@angular/cdk/layout";
import { CanvastarComponent } from 'src/app/components/canvastar/canvastar.component';

@Component({
  selector: 'logo',
  templateUrl: './logo.component.html',
})
export class LogoComponent implements OnInit {
  public isBelowMd: boolean = false;
  public isBelowLg: boolean = false;
  @ViewChild('canvastar') canvastar!: CanvastarComponent;
  public bunny: string = "bunny";

  constructor(
    private screenWidthService: ScreenWidthService,
    private changeDetector: ChangeDetectorRef,
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

  callCanvas() {
    this.canvastar.launchStar()
  }

  changeToPope() {
    this.bunny = "aubrey2137"
    this.canvastar.isPopeEnabled = true;
    this.canvastar.cuteSound.src = "../../../assets/sounds/jestmozliwe.mp3";
  }

}
