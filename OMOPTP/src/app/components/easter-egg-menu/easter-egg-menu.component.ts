import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { secretMenuAnimation } from 'src/app/common/animations';
import { AppTheme } from 'src/app/common/types';
import { ChangeTheme } from 'src/app/state/theme.actions';
import { ThemeState } from 'src/app/state/theme.state';

interface easterEggs {
  normal?: boolean,
  scary?: boolean,
  pope?: boolean,
  balbinka?: boolean
}

@Component({
  selector: 'easter-egg-menu',
  templateUrl: './easter-egg-menu.component.html',
  styleUrls: ['./easter-egg-menu.component.scss'],
  animations: [secretMenuAnimation],
})
export class EasterEggMenuComponent implements OnInit, OnDestroy {
  @Select(ThemeState.theme) appTheme$: Observable<{theme: AppTheme}>

  @HostBinding('@secretMenuAnimation') get animationCondition(): string {
    return this.showMenu ? 'open' : 'closed';
  }
  
  AppTheme = AppTheme;
  showMenu: boolean = false;

  discoveredEasterEggs: easterEggs = {
    normal: true,
    scary: false,
    pope: false,
    balbinka: false
  }

  private themeSubscription: Subscription;

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.loadLocalStorageEasterEggs();
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  onButtonClick(): void {
    this.showMenu = !this.showMenu;
  }

  changeTheme(theme: AppTheme): void {
    this.store.dispatch(new ChangeTheme(theme));
  }

  private loadLocalStorageEasterEggs(): void {
    this.appTheme$.subscribe(() => {
      this.discoveredEasterEggs.scary = localStorage.getItem('1') === 'true' ? true : false;
      this.discoveredEasterEggs.pope = localStorage.getItem('2') === 'true' ? true : false;
      this.discoveredEasterEggs.balbinka = localStorage.getItem('3') === 'true' ? true : false;
    })
  }

}
