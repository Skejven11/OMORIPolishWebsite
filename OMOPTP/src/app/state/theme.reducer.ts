import { AppTheme } from "../common/types";
import { createReducer, on} from '@ngrx/store';
import { changeTheme } from "./theme.actions";

export interface AppState {
    theme: any;
}

export const initialState: AppState = {
    theme: 'normal'
}

export const themeReducer = createReducer(
    initialState,
    on(changeTheme, (state, { theme }) => ({
        theme: theme
    }))
);