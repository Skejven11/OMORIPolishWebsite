import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { faDiscord, faTwitter, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons'

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
  @Input() instagramLink: string = "";
  @Input() tiktokLink: string = "";
  @Input() siteLink: string = "";
  @Input() imgSrc: string = "";
  public faDiscord = faDiscord;
  public faTwitter = faTwitter;
  public faInstagram = faInstagram;
  public faTiktok = faTiktok;
  public faLink = faLink;

  constructor(
    private changeDetector: ChangeDetectorRef,
  ) {
   }

  ngOnInit(): void {
    this.imgSrc = this.imgSrc != "" ? "../../../../assets/img/portraits/" + this.imgSrc : "";
    this.discordLink = this.discordLink != "" ? "https://discordapp.com/users/" + this.discordLink : "";
    this.twitterLink = this.twitterLink != "" ? "https://twitter.com/" + this.twitterLink : "";
    this.instagramLink = this.instagramLink != "" ? "https://instagram.com/" + this.instagramLink : "";
    this.tiktokLink = this.tiktokLink != "" ? "https://tiktok.com/@" + this.tiktokLink : "";
    this.changeDetector.detectChanges();
  }

}
