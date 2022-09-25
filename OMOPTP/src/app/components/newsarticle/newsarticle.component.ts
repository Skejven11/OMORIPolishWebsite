import { BreakpointState } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, ElementRef, HostListener, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ScreenWidthService } from 'src/app/common/screen-width.service';

@Component({
  selector: 'newsarticle',
  templateUrl: './newsarticle.component.html',
  styleUrls: ['./newsarticle.component.scss'],
})
export class NewsarticleComponent implements OnInit {
  @Input() public article: NewsArticle;
  @ViewChild('modalWindow') modalWindow: ElementRef;
  @ViewChild('modalPhoto') modalPhoto: ElementRef;
  public showPhoto: boolean = false;
  public photoSrc: string = "";

  public isBelowMd: boolean = false;

  constructor(
    private screenWidthService: ScreenWidthService,
    private renderer: Renderer2,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.screenWidthService.isBelowMd().subscribe((isBelowMd: BreakpointState) => {
      this.isBelowMd = isBelowMd.matches;
    })
  }

  onPhotoClick(photoSrc: string):void { 
    this.showPhoto = true;
    this.photoSrc = photoSrc;
    this.changeDetector.detectChanges();
    var modalWindow = this.modalWindow.nativeElement;
    var modalPhoto = this.modalPhoto.nativeElement;
    var listener = this.renderer.listen(modalWindow, 'click', (e: Event) => {
      if (e.target != modalPhoto) {
        this.showPhoto = false;
        listener();
      }
    })
  }

}

export type NewsArticle = {
  date: string,
  author: string,
  text: string,
  photos?: string[]
}
