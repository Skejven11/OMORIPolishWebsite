import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('portrait') portraitElement: ElementRef;
  @Input() name: string = "";
  @Input() roles: string = "";
  @Input() twitterLink: string = "";
  @Input() discordTag: string = "";
  @Input() instagramLink: string = "";
  @Input() tiktokLink: string = "";
  @Input() youtubeLink: string = "";
  @Input() siteLink: string = "";
  @Input() imgSrc: string = "";
  @Input() altPortrait: string = "";
  public faDiscord = faDiscord;
  public faTwitter = faTwitter;
  public faInstagram = faInstagram;
  public faTiktok = faTiktok;
  public faLink = faLink;
  public faYoutube = faYoutube;

  public showPopUp: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.imgSrc = this.imgSrc != "" ? "../../../../assets/img/portraits/" + this.imgSrc : "";
    this.twitterLink = this.twitterLink != "" ? "https://twitter.com/" + this.twitterLink : "";
    this.instagramLink = this.instagramLink != "" ? "https://instagram.com/" + this.instagramLink : "";
    this.tiktokLink = this.tiktokLink != "" ? "https://tiktok.com/@" + this.tiktokLink : "";
    this.youtubeLink = this.youtubeLink != "" ? "https://www.youtube.com/channel/" + this.youtubeLink : "";
  }

  onDiscordClick() {
    if (this.showPopUp) return;
    this.showPopUp = true;
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
      navigator.clipboard.writeText(this.discordTag);
    else Promise.reject('The Clipboard API is not available.');
    setTimeout(() => {
      this.showPopUp = false
    }, 3000)
  }

  changePortrait(): void {
    if (this.altPortrait && Math.floor(Math.random() * 8 + 1) === 8) this.portraitElement.nativeElement.src = "../../../../assets/img/portraits/" + this.altPortrait;
  }

  changePortraitBack(): void {
    this.portraitElement.nativeElement.src = "../../../../assets/img/portraits/" + this.imgSrc;
  }
}
