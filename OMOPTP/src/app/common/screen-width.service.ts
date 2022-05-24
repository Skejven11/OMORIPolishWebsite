import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScreenWidthService {

  constructor(private observer: BreakpointObserver) {}

  isBelowSm(): Observable<BreakpointState> {
    return this.observer.observe([`(max-width: ${640 - 1}px)`]);
  }

  isBelowMd(): Observable<BreakpointState> {
    return this.observer.observe([`(max-width: ${768 - 1}px)`]);
  }

  isBelowLg(): Observable<BreakpointState> {
    return this.observer.observe([`(max-width: ${1024 - 1}px)`]);
  }

  isBelowXl(): Observable<BreakpointState> {
    return this.observer.observe([`(max-width: ${1280 - 1}px)`]);
  }

  isBelowTwoXl(): Observable<BreakpointState> {
    return this.observer.observe([`(max-width: ${1536 - 1}px)`]);
  }
}
