import { BreakpointState } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { ScreenWidthService } from 'src/app/common/screen-width.service';

@Component({
  selector: 'newsarticle',
  templateUrl: './newsarticle.component.html',
  styleUrls: ['./newsarticle.component.scss'],
})
export class NewsarticleComponent implements OnInit {
  @Input() public article: NewsArticle;

  public isBelowMd: boolean = false;

  constructor(
    private screenWidthService: ScreenWidthService
  ) { }

  ngOnInit(): void {
    this.screenWidthService.isBelowMd().subscribe((isBelowMd: BreakpointState) => {
      this.isBelowMd = isBelowMd.matches;
    })
  }

}

export type NewsArticle = {
  date: string,
  author: string,
  text: string,
}
