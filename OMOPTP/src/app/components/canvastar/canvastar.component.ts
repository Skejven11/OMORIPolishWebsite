import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'canvastar',
  templateUrl: './canvastar.component.html'
})
export class CanvastarComponent implements OnInit {
  @ViewChild('canvas', {static: true}) canvas: ElementRef<HTMLCanvasElement>;
  @ViewChild('starImage') starImage: HTMLImageElement;
  private ctx: CanvasRenderingContext2D;

  constructor(
  ) { }

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
  }

  launchStar() {
    this.ctx.drawImage(this.starImage, 50, 50)
  }

  randomiseArc() {
    let x: number = 0;
    x = Math.random() * (30 -1 + 1) + 1;
    return x;
  }
}
