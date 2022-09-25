import { Component, OnInit } from '@angular/core';
import { NewsArticle } from 'src/app/components/newsarticle/newsarticle.component';
import { articles } from './articles-provider';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public articles: NewsArticle[] = articles;

  constructor() { }

  ngOnInit(): void {
  }

}


