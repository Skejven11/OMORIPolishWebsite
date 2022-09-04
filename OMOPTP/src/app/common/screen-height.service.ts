import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScreenHeightService {

  constructor(private observer: BreakpointObserver) {}

  isAboveFHD(): Observable<BreakpointState> {
    return this.observer.observe([`(min-height: ${1080 + 1}px)`]);
  }

  isAboveUHD(): Observable<BreakpointState> {
    return this.observer.observe([`(min-height: ${2160 + 1}px)`]);
  }
}