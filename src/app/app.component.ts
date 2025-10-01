import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from "@angular/cdk/layout";
import { fromEvent, map } from 'rxjs';
import { MenuItem } from './shared/models/menuItem';
import { menuItems } from './shared/models/menu';

export const SCROLL_CONTAINER = 'mat-sidenav-content';
export const TEXT_LIMIT = 50;
export const SHADOW_LIMIT = 100;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  isSmallScreen = false;
  popText = false;
  applyShadow = false;
  items_menu: MenuItem[] = menuItems;

  constructor(private brackpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    const content = document.getElementsByClassName(SCROLL_CONTAINER)[0];

    fromEvent(content, 'scroll')
      .pipe(
        map(() => content.scrollTop)
      )
      .subscribe({
        next: (value: number) => this.determineHeader(value)
      })
  }

  determineHeader(scroll: number) {
    this.popText = scroll >= TEXT_LIMIT;
    this.applyShadow = scroll >= SHADOW_LIMIT;
  }

  ngAfterContentInit(): void {
    this.brackpointObserver
      .observe(['(max-width: 800px)'])
      .subscribe((res) => this.isSmallScreen = res.matches)
  }

  get sidenavMode() {
    return this.isSmallScreen ? 'over' : 'push'
  }

}
