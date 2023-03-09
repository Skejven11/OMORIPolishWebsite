import { BreakpointState } from '@angular/cdk/layout';
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { ScreenWidthService } from 'src/app/common/screen-width.service';
import { wait } from 'src/app/common/helper-functions';
import { AppTheme } from 'src/app/common/types';
import { Select, Store } from '@ngxs/store';
import { ChangeTheme } from 'src/app/state/theme.actions';
import { ThemeState } from 'src/app/state/theme.state';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'canvastar',
  templateUrl: './canvastar.component.html'
})
export class CanvastarComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas', {static: true}) canvas: ElementRef<HTMLCanvasElement>;
  @ViewChild('starImage') starImage: ElementRef;

  private ctx: CanvasRenderingContext2D;
  private creepyEnabled: boolean = false;
  private howManyStarsPressed: number = 0;
  private speed: number = 35;
  private longevity: number = 45
  public cuteSound;
  private isBelowMd: boolean = false;
  private leftSide: boolean = false;
  private themeSubscription: Subscription;

  @Select(ThemeState.theme) appTheme$: Observable<{theme: AppTheme}>

  constructor(
    private screenWidthService: ScreenWidthService,
    private store: Store,
  ) {}

  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.cuteSound = new Audio();
    this.cuteSound.src = "../../../assets/sounds/BA_cute.ogg";
    this.cuteSound.load();
    this.cuteSound.volume = 0.4;

    this.screenWidthService.isBelowMd().subscribe((isBelowMd: BreakpointState) => {
      this.isBelowMd = isBelowMd.matches;
    })

    this.listenToThemeChange();
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  async launchStar() {
    this.howManyStarsPressed++;
    this.cuteSound.pause();
    this.cuteSound.currentTime = 0;

    this.leftSide = this.leftSide ? false : true;

    if (this.howManyStarsPressed === 30 && !this.creepyEnabled) {
      this.creepyEvent();
    }

    let x = this.canvas.nativeElement.width / 2;
    let y = this.isBelowMd ? this.canvas.nativeElement.height * 1/3 : this.canvas.nativeElement.height * 1/4;
    let velocityY = this.isBelowMd ? 5 : 10;
    let velocityX = 0;
    if (this.isBelowMd) velocityX = this.leftSide ? -this.randomiseNumber(12, 3) : this.randomiseNumber(12, 3);
    else velocityX = this.leftSide ? -this.randomiseNumber(20, 7) : this.randomiseNumber(20, 7);
    let width = this.isBelowMd ? 27 : 50;
    let height = this.isBelowMd ? 27 : 50;

    let star = new StarElement(width, height, x, y, this.starImage.nativeElement, velocityX, velocityY);

    this.cuteSound.play();
    for (let i=0;i<this.longevity;i++) {
        this.drawStar(star);
        star.updateStar();
        await wait(this.speed);
      }
  }

  async creepyEvent() {
    this.creepyEnabled = true;
    this.store.dispatch(new ChangeTheme(AppTheme.scary));
  }

  private drawStar(star: StarElement): void {
    this.ctx.clearRect(star.lastX, star.lastY, star.width++, star.height++);
    this.ctx.drawImage(star.imageSrc, star.x, star.y, star.width, star.height);
  }

  private randomiseNumber(max: number, min: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

  private listenToThemeChange(): void {
    this.appTheme$.subscribe(result => {
      switch (result.theme) {
        case AppTheme.normal:
          this.cuteSound.src = "../../../assets/sounds/BA_cute.ogg";
          this.starImage.nativeElement.src = "../../../assets/img/star.png";
          break;
        case AppTheme.pope:
          this.cuteSound.src = "../../../assets/sounds/jestmozliwe.mp3";
          this.starImage.nativeElement.src = '../../../assets/img/kremowka.png';
          break;
        case AppTheme.scary:
          this.cuteSound.src = '../../../assets/sounds/BA_scary.ogg';
          this.starImage.nativeElement.src = '../../../assets/img/scary_star.png';
          break;
        case AppTheme.balbinka:
          this.cuteSound.src = "../../../assets/sounds/meow.mp3";
          this.starImage.nativeElement.src = "../../../assets/img/star.png";
          break;
      }
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
