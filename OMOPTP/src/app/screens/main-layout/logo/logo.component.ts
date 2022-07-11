import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ScreenWidthService } from 'src/app/common/screen-width.service';
import { BreakpointState } from "@angular/cdk/layout"

@Component({
  selector: 'logo',
  templateUrl: './logo.component.html',
})
export class LogoComponent implements OnInit {
  public isBelowSm: boolean = false;

  constructor(
    private screenWidthService: ScreenWidthService,
    private changeDetector: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.screenWidthService.isBelowSm().subscribe((isBelowSm: BreakpointState) => {
      this.isBelowSm = isBelowSm.matches;
      this.changeDetector.detectChanges();
    })
  }

}
