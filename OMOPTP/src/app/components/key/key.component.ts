import { Component, Input, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AppTheme } from 'src/app/common/types';
import { PickUpKey } from 'src/app/state/door.actions';
import { DoorState } from 'src/app/state/door.state';
import { ThemeState } from 'src/app/state/theme.state';

@Component({
  selector: 'key-component',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.scss']
})
export class KeyComponent implements OnInit {
  @Select(ThemeState.theme) appTheme$: Observable<{theme: AppTheme}>;

  @Input() top: string = 'unset';
  @Input() bottom: string = 'unset';
  @Input() right: string = 'unset';
  @Input() left: string = 'unset';
  @Input() id: number = 0;

  get isPickedUp(): boolean {
    return this.store.selectSnapshot(DoorState.isKeyPickedUp(this.id));
  }

  private keySound;

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.keySound = new Audio();
    this.keySound.src = "../../../assets/sounds/SE_key_drop.ogg";
    this.keySound.load();
    this.keySound.volume = 0.4;
  }

  onClick(): void {
    this.keySound.play();
    this.store.dispatch(new PickUpKey(this.id));
  }

}
