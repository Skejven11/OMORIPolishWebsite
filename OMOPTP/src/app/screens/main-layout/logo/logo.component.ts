import { ChangeDetectorRef, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ScreenWidthService } from 'src/app/common/screen-width.service';
import { BreakpointState } from "@angular/cdk/layout";
import { CanvastarComponent } from 'src/app/components/canvastar/canvastar.component';
import { Store } from '@ngrx/store'
import { selectTheme } from 'src/app/state/theme.selector';

@Component({
  selector: 'logo',
  templateUrl: './logo.component.html',
})
export class LogoComponent implements OnInit {

  public appTheme$ = this.store.select(selectTheme);

  @ViewChild('canvastar') canvastar!: CanvastarComponent;

  public isBelowMd: boolean = false;
  public isBelowLg: boolean = false;
  public bunny: string = "bunny";

  constructor(
    private screenWidthService: ScreenWidthService,
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.screenWidthService.isBelowMd().subscribe((isBelowMd: BreakpointState) => {
      this.isBelowMd = isBelowMd.matches;
    })

    this.screenWidthService.isBelowLg().subscribe((isBelowLg: BreakpointState) => {
      this.isBelowLg = isBelowLg.matches;
    })

    this.store.select(selectTheme).subscribe(result => {
      switch(result.theme) {
        case 'scary':
          this.bunny = "scary_bunny"
          break;
        case 'normal':
          this.bunny = "bunny"
          break;
        case 'pope':
          this.bunny = "aubrey2137"
          break;
      }
    })
  }

  callCanvas() {
    this.canvastar.launchStar();
  }
}
