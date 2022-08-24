import { BreakpointState } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ScreenWidthService } from 'src/app/common/screen-width.service';

@Component({
  selector: 'frontpage',
  templateUrl: './frontpage.component.html',
})
export class FrontpageComponent implements OnInit {
  public isBelowMd: boolean = false;

  constructor(
    private screenWidthService: ScreenWidthService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.screenWidthService.isBelowMd().subscribe((isBelowMd: BreakpointState) => {
      this.isBelowMd = isBelowMd.matches;
      this.changeDetector.detectChanges();
    })
  }

}
