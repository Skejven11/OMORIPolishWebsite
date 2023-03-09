import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { whiteSpaceAnimation } from 'src/app/common/animations';
import { AppTheme } from 'src/app/common/types';
import { DoorState } from 'src/app/state/door.state';
import { ChangeTheme } from 'src/app/state/theme.actions';
import { ThemeState } from 'src/app/state/theme.state';

@Component({
  selector: 'blackspace-door',
  templateUrl: './blackspace-door.component.html',
  styleUrls: ['./blackspace-door.component.scss'],
  animations: [whiteSpaceAnimation]
})
export class BlackspaceDoorComponent implements OnInit, OnDestroy {
  @ViewChild('img') imageElement: ElementRef;

  @Select(ThemeState.theme) appTheme$: Observable<{theme: AppTheme}>

  doorOpened: boolean = false;

  private doorSound;
  private unlockedDoorSubscription: Subscription;

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.loadSound();
    this.unlockedDoorSubscription = this.store.select(DoorState.isDoorUnlocked)
      .subscribe(x => {
        if (x) {
          this.playUnlockSound();
        }
    });
  }

  ngOnDestroy(): void {
    this.unlockedDoorSubscription.unsubscribe();
  }

  onClick(): void {
    if (this.store.selectSnapshot(DoorState.isDoorUnlocked)) {
      this.doorSound.src = "../../../assets/sounds/cutscene_the_truth.ogg";
      this.imageElement.nativeElement.src = '/assets/img/bs_door.gif'
      this.doorOpened = true;
      setTimeout(() => {
        this.doorOpened = false;
        this.store.dispatch(new ChangeTheme(AppTheme.balbinka));
      }, 10000);
    }
    this.doorSound.play();
  }

  private loadSound(): void {
    this.doorSound = new Audio();
    this.doorSound.src = "../../../assets/sounds/se_doorknock.ogg";
    this.doorSound.load();
    this.doorSound.volume = 0.4;
  }

  private playUnlockSound(): void {
    this.doorSound.src = "../../../assets/sounds/SE_Door_Unlock.ogg";
    this.doorSound.play();
  }
}
