import { BreakpointState } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, ElementRef, HostListener, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ScreenWidthService } from 'src/app/common/screen-width.service';

export type NewsArticle = {
  date?: string,
  author?: string,
  text?: string,
  photos?: string[],
  video?: string
}

@Component({
  selector: 'newsarticle',
  templateUrl: './newsarticle.component.html',
  styleUrls: ['./newsarticle.component.scss'],
})
export class NewsarticleComponent implements OnInit {
  @Input() public article: NewsArticle;
  @ViewChild('modalWindow') modalWindow: ElementRef;
  @ViewChild('modalPhoto') modalPhoto: ElementRef;
  @ViewChild('next') nextButton: ElementRef;
  @ViewChild('previous') previousButton: ElementRef;
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

  onPhotoClick(photos: string[], index: number):void { 
    this.showPhoto = true;
    this.photoSrc = photos[index];
    this.changeDetector.detectChanges();
    var modalWindow = this.modalWindow.nativeElement;
    var modalPhoto = this.modalPhoto.nativeElement;
    var nextButton = this.nextButton.nativeElement;
    var previousButton = this.previousButton.nativeElement;
    var listener = this.renderer.listen(modalWindow, 'click', (e: Event) => {
      if (e.target === nextButton) {
        if (index + 1 > photos.length - 1) index = 0;
        else index++;
        this.photoSrc = photos[index]
      }
      else if (e.target === previousButton) {
        if (index - 1 < 0) index = photos.length - 1;
        else index--;
        this.photoSrc = photos[index]
      }
      else if (e.target != modalPhoto) {
        this.showPhoto = false;
        listener();
      }
    })
  }
}
