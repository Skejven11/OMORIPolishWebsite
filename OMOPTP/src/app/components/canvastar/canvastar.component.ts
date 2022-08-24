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
  private ctx: CanvasRenderingContext2D;
  private image: {
    imageSrc: HTMLImageElement,
    x: number,
    y: number,
    width: number,
    height: number,
    velocityX: number,
    velocityY: number
  }
  private gravity: number = -2;
  private alreadyLaunched: boolean = false;
  private speed: number = 35;
  private longevity: number = 40
  private cuteSound;
  private isBelowMd: boolean = false;

  constructor(
    private screenWidthService: ScreenWidthService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngAfterViewInit(): void {
    this.image = {
      imageSrc: this.starImage.nativeElement,
      width: 50,
      height: 50,
      x: 0,
      y: 0,
      velocityX: 0,
      velocityY: 0
    }
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
    if (this.alreadyLaunched) return;

    let leftSide: boolean = this.randomiseNumber(3, 1) === 1 ? true : false;

    this.image.x = this.canvas.nativeElement.width / 2;
    this.image.y = this.isBelowMd ? this.canvas.nativeElement.height * 1/3 : this.canvas.nativeElement.height * 1/4;
    this.image.velocityY = this.isBelowMd ? 5 : 10;
    if (this.isBelowMd) this.image.velocityX = leftSide ? -this.randomiseNumber(14, 7) : this.randomiseNumber(14, 7);
    else this.image.velocityX = leftSide ? -this.randomiseNumber(20, 7) : this.randomiseNumber(20, 7);
    this.image.width = this.isBelowMd ? 40 : 50;
    this.image.height = this.isBelowMd ? 40 : 50;

    this.alreadyLaunched = true;
    this.cuteSound.play();
    for (let i=0;i<this.longevity;i++) {
        this.drawStar();
        this.updateStar();
        await this.wait(this.speed);
      }
    this.alreadyLaunched = false;
    }

  updateStar() {
    this.image.velocityY += this.gravity;

    this.image.x += this.image.velocityX;
    this.image.y -= this.image.velocityY;
    this.image.width--;
    this.image.height--;
  }

  drawStar() {
    this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    this.ctx.drawImage(this.image.imageSrc, this.image.x, this.image.y, this.image.width, this.image.height);
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
