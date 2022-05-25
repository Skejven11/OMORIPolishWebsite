import { Component, OnInit } from '@angular/core';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  public faDiscord = faDiscord;
  public faTwitter = faTwitter;

  constructor() { }

  ngOnInit(): void {
  }

}
