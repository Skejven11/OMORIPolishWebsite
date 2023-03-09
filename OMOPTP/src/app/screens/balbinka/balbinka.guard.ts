import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Store } from '@ngxs/store';
import { AppTheme } from 'src/app/common/types';
import { ThemeState } from 'src/app/state/theme.state';

@Injectable()
export class BalbinkaGuard implements CanActivate {  
  constructor(
    private readonly router: Router,
    private readonly store: Store) 
  {}  
  
  canActivate(): boolean {
    const appTheme: any = this.store.selectSnapshot(ThemeState.theme);

    if (appTheme.theme !== AppTheme.balbinka) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}