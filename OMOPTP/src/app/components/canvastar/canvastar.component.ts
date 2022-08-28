import { BreakpointState } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ScreenWidthService } from 'src/app/common/screen-width.service';

@Component({
  selector: 'canvastar',
  templateUrl: './canvastar.component.html'
})
export class CanvastarComponent implements AfterViewInit {
  @ViewChild('canvas', {static: true}) canvas: ElementRef<HTMLCanvasElement>;
  @ViewChild('starImage') starImage: ElementRef;
  @ViewChild('kremowkaImage') kremowkaImage: ElementRef;

  private ctx: CanvasRenderingContext2D;
  private alreadyLaunched: boolean = false;
  private speed: number = 35;
  private longevity: number = 45
  public cuteSound;
  private isBelowMd: boolean = false;
  private leftSide: boolean = false;
  public isPopeEnabled: boolean = false;

  constructor(
    private screenWidthService: ScreenWidthService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.cuteSound = new Audio();
    this.cuteSound.src = "../../../assets/sounds/BA_cute.ogg";
    this.cuteSound.load();
    this.cuteSound.volume = 0.4;

    this.screenWidthService.isBelowMd().subscribe((isBelowMd: BreakpointState) => {
      this.isBelowMd = isBelowMd.matches;
      this.changeDetector.detectChanges();
    })
  }

  async launchStar() {
    this.cuteSound.pause();
    this.cuteSound.currentTime = 0;

    this.leftSide = this.leftSide ? false : true;

    let x = this.canvas.nativeElement.width / 2;
    let y = this.isBelowMd ? this.canvas.nativeElement.height * 1/3 : this.canvas.nativeElement.height * 1/4;
    let velocityY = this.isBelowMd ? 5 : 10;
    let velocityX = 0;
    if (this.isBelowMd) velocityX = this.leftSide ? -this.randomiseNumber(12, 3) : this.randomiseNumber(12, 3);
    else velocityX = this.leftSide ? -this.randomiseNumber(20, 7) : this.randomiseNumber(20, 7);
    let width = this.isBelowMd ? 40 : 50;
    let height = this.isBelowMd ? 40 : 50;

    let star = new StarElement(width, height, x, y, this.isPopeEnabled ? this.kremowkaImage.nativeElement : this.starImage.nativeElement, velocityX, velocityY);

    this.alreadyLaunched = true;
    this.cuteSound.play();
    for (let i=0;i<this.longevity;i++) {
        this.drawStar(star);
        star.updateStar();
        await this.wait(this.speed);
      }
    this.alreadyLaunched = false;
    }

  drawStar(star: StarElement) {
    this.ctx.clearRect(star.lastX, star.lastY, star.width++, star.height++);
    this.ctx.drawImage(star.imageSrc, star.x, star.y, star.width, star.height);
  }

  randomiseNumber(max: number, min: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  wait(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
      resolve(ms)
      }, ms )
    })
  }  
}

class StarElement {
  imageSrc: HTMLImageElement;
   public x: number;
   public lastX: number;
   public y: number;
   public lastY: number;
   public width: number;
   public height: number;
   private velocityX: number;
   private velocityY: number;
   private gravity: number = -2;

  constructor(width: number, height: number, x: number, y: number, imageSrc: HTMLImageElement, velocityX: number, velocityY: number) {
      this.imageSrc = imageSrc;
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.velocityX = velocityX;
      this.velocityY = velocityY;
      this.lastX = 0;
      this.lastY = 0;
  }

  updateStar() {
    this.lastX = this.x;
    this.lastY = this.y;
    this.velocityY += this.gravity;

    this.x += this.velocityX;
    this.y -= this.velocityY;
    this.width--;
    this.height--;
  }
}
