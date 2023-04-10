import { Component, OnInit } from '@angular/core';
import { faDiscord, faTwitter, faYoutube, faTiktok, faSteam } from '@fortawesome/free-brands-svg-icons';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AppTheme } from 'src/app/common/types';
import { ThemeState } from 'src/app/state/theme.state';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  public faDiscord = faDiscord;
  public faTwitter = faTwitter;
  public faYoutube = faYoutube;
  public faTiktok = faTiktok;
  public faSteam = faSteam;

  @Select(ThemeState.theme) appTheme$: Observable<{theme: AppTheme}>;

  constructor() { }

  ngOnInit(): void {
  }

}
