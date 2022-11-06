import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScreenHeightService {

  constructor(private observer: BreakpointObserver) {}

  isBelowFHD(): Observable<BreakpointState> {
    return this.observer.observe([`(max-height: ${1080 - 1}px)`]);
  }

  isBelowUHD(): Observable<BreakpointState> {
    return this.observer.observe([`(max-height: ${2160 - 1}px)`]);
  }
}