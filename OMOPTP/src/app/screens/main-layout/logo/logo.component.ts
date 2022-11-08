import { ChangeDetectorRef, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ScreenWidthService } from 'src/app/common/screen-width.service';
import { BreakpointState } from "@angular/cdk/layout";
import { CanvastarComponent } from 'src/app/components/canvastar/canvastar.component';
import { ScaryEasterEggObj } from 'src/app/common/types';

@Component({
  selector: 'logo',
  templateUrl: './logo.component.html',
})
export class LogoComponent implements OnInit {
  @ViewChild('canvastar') canvastar!: CanvastarComponent;

  @Output() emitScaryBgChange = new EventEmitter<ScaryEasterEggObj>();

  public isBelowMd: boolean = false;
  public isBelowLg: boolean = false;
  public bunny: string = "bunny";
  public isScary: boolean = false;

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
  }

  callCanvas() {
    this.canvastar.launchStar()
  }

  changeToPope() {
    this.bunny = "aubrey2137"
    this.canvastar.isPopeEnabled = true;
    this.canvastar.cuteSound.src = "../../../assets/sounds/jestmozliwe.mp3";
  }

  changeToScary(emitObject: {logoSrc: string, bgSrc: string}) {
    this.bunny = emitObject.logoSrc;
    this.isScary = !this.isScary
    this.emitScaryBgChange.emit(emitObject);
  }

}
