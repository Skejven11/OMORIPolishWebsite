import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'team-item',
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.scss']
})
export class TeamItemComponent implements OnInit {
  @Input() name: string = "";
  @Input() roles: string = "";
  @Input() twitterLink: string = "";
  @Input() discordLink: string = "";
  @Input() imgSrc: string = "";
  public faDiscord = faDiscord;
  public faTwitter = faTwitter;

  constructor(
    private changeDetector: ChangeDetectorRef,
  ) {
   }

  ngOnInit(): void {
    this.imgSrc = this.imgSrc != "" ? "../../../../assets/img/" + this.imgSrc : "";
    this.discordLink = this.discordLink != "" ? "https://discordapp.com/users/" + this.discordLink : "";
    this.twitterLink = this.twitterLink != "" ? "https://twitter.com/" + this.twitterLink : "";
    this.changeDetector.detectChanges();
  }

}
