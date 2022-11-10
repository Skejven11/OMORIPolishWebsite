import { createSelector } from '@ngrx/store';
import { AppTheme } from '../common/types';
import { AppState } from './theme.reducer';

export const selectThemeBase = (state: AppState) => state.theme;

export const selectTheme = createSelector(
    selectThemeBase,
    (theme: any) => theme
)