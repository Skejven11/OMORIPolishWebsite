import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

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

  constructor(
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
  }

  async launchStar() {
    if (this.alreadyLaunched) return;

    let leftSide: boolean = this.randomiseNumber(3, 1) === 1 ? true : false;

    this.image.x = this.canvas.nativeElement.width / 2;
    this.image.y = this.canvas.nativeElement.height * 1/4;
    this.image.velocityY = 10;
    this.image.velocityX = leftSide ? -this.randomiseNumber(20, 7) : this.randomiseNumber(20, 7);
    this.image.width = 50;
    this.image.height = 50;

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
