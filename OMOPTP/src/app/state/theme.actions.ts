import { AppTheme } from '../common/types';

export class ChangeTheme {
    static readonly type = '[Theme] ChangeTheme';
    constructor(public theme: AppTheme) {}
}