import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AppTheme } from '../common/types';
import { ChangeTheme } from './theme.actions';

export interface AppStateModel {
  theme: AppTheme;
}

@State<AppStateModel>({
  name: 'theme',
  defaults: {
    theme: AppTheme.normal
  }
})
@Injectable()
export class ThemeState {
  @Action(ChangeTheme)
  changeTheme(ctx: StateContext<AppStateModel>, action: any) {
    const state = ctx.getState();

    localStorage.setItem(action.theme.toString(), 'true');
    ctx.patchState({
      ...state,
      theme: action
    });
  }

  @Selector() static theme(state: AppStateModel): AppTheme {
    return state.theme;
  }
}