import { Component, inject, OnInit } from '@angular/core';
import { BreakpointObserver } from "@angular/cdk/layout";
import { filter, fromEvent, map } from 'rxjs';
import { MenuItem } from './shared/models/menuItem';
import { menuItems } from './shared/models/menu';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

export const SCROLL_CONTAINER = 'mat-drawer-content';
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
  menuName = '';
  private brackpointObserver: BreakpointObserver = inject(BreakpointObserver);
  private route: Router = inject(Router);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    const content = document.getElementsByClassName(SCROLL_CONTAINER)[0];

    fromEvent(content, 'scroll')
      .pipe(
        map(() => content.scrollTop)
      )
      .subscribe((value: number) => this.determineHeader(value))

    this.route.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.menuName = this.activatedRoute.firstChild?.snapshot.routeConfig?.path ?? '';
    })
  }

  determineHeader(scroll: number) {
    this.popText = scroll >= TEXT_LIMIT;
    this.applyShadow = scroll >= SHADOW_LIMIT;
  }

  ngAfterViewInit(): void {
    this.brackpointObserver
      .observe(['(max-width: 800px)'])
      .subscribe((res) => this.isSmallScreen = res.matches)
  }

  get sidenavMode() {
    return this.isSmallScreen ? 'over' : 'side'
  }

}
