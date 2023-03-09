import { Component, OnInit } from '@angular/core';
import { NewsArticle } from 'src/app/components/newsarticle/newsarticle.component';

@Component({
  selector: 'app-balbinka',
  templateUrl: './balbinka.component.html',
  styleUrls: ['./balbinka.component.scss']
})
export class BalbinkaComponent implements OnInit {
  article: NewsArticle = {
    photos: [
      'balbinkas/1.jpg',
      'balbinkas/2.jpg',
      'balbinkas/3.jpg',
      'balbinkas/4.jpg',
      'balbinkas/5.jpg',
      'balbinkas/6.jpg',
      'balbinkas/7.jpg',
      'balbinkas/8.jpg',
      'balbinkas/9.jpg',
      'balbinkas/10.jpg',
      'balbinkas/11.jpg',
      'balbinkas/12.jpg'
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
