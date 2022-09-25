import { BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ScreenWidthService } from 'src/app/common/screen-width.service';
import { NewsArticle } from 'src/app/components/newsarticle/newsarticle.component';
import { articles } from '../news/articles-provider';

@Component({
  selector: 'frontpage',
  templateUrl: './frontpage.component.html',
})
export class FrontpageComponent implements OnInit {
  public isBelowMd: boolean = false;
  public latestArticle: NewsArticle = articles[0];

  constructor(
    private screenWidthService: ScreenWidthService,
  ) { }

  ngOnInit(): void {
    this.screenWidthService.isBelowMd().subscribe((isBelowMd: BreakpointState) => {
      this.isBelowMd = isBelowMd.matches;
    })
  }

}
