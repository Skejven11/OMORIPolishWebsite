import { createAction, props } from '@ngrx/store';
import { AppTheme } from '../common/types';

export const changeTheme = createAction(
    '[Theme] Change Theme',
    props<{ theme: AppTheme }>()
);