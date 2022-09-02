import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { faDiscord, faTwitter, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { popAnimation } from 'src/app/common/animations';

@Component({
  selector: 'team-item',
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.scss'],
  animations: [ popAnimation ]
})
export class TeamItemComponent implements OnInit {
  @Input() name: string = "";
  @Input() roles: string = "";
  @Input() twitterLink: string = "";
  @Input() discordTag: string = "";
  @Input() instagramLink: string = "";
  @Input() tiktokLink: string = "";
  @Input() youtubeLink: string = "";
  @Input() siteLink: string = "";
  @Input() imgSrc: string = "";
  public faDiscord = faDiscord;
  public faTwitter = faTwitter;
  public faInstagram = faInstagram;
  public faTiktok = faTiktok;
  public faLink = faLink;
  public faYoutube = faYoutube;

  public showPopUp: boolean = false;

  constructor(
    private changeDetector: ChangeDetectorRef,
  ) {
   }

  ngOnInit(): void {
    this.imgSrc = this.imgSrc != "" ? "../../../../assets/img/portraits/" + this.imgSrc : "";
    this.twitterLink = this.twitterLink != "" ? "https://twitter.com/" + this.twitterLink : "";
    this.instagramLink = this.instagramLink != "" ? "https://instagram.com/" + this.instagramLink : "";
    this.tiktokLink = this.tiktokLink != "" ? "https://tiktok.com/@" + this.tiktokLink : "";
    this.youtubeLink = this.youtubeLink != "" ? "https://www.youtube.com/channel/" + this.youtubeLink : "";
    this.changeDetector.detectChanges();
  }

  onDiscordClick() {
    if (this.showPopUp) return;
    this.showPopUp = true;
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
      navigator.clipboard.writeText(this.discordTag);
    Promise.reject('The Clipboard API is not available.');
    setTimeout(() => {
      this.showPopUp = false
    }, 3000)
  }
}
