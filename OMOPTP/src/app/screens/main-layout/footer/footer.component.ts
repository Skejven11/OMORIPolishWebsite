import { Component, OnInit } from '@angular/core';
import { faDiscord, faTwitter, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { Store } from '@ngrx/store';
import { selectTheme } from 'src/app/state/theme.selector';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  public faDiscord = faDiscord;
  public faTwitter = faTwitter;
  public faYoutube = faYoutube;
  public faTiktok = faTiktok;

  public appTheme$ = this.store.select(selectTheme);

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
  }

}
