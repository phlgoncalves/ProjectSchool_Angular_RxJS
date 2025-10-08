import { Component, Input } from '@angular/core';
import { MenuItem } from '../../models/menuItem';

@Component({
  selector: 'app-toolbar-menu',
  standalone: false,
  templateUrl: './toolbar-menu.component.html',
  styleUrl: './toolbar-menu.component.scss'
})
export class ToolbarMenuComponent {
  @Input() shadow: boolean = false;
  @Input() popText: boolean = false;
  @Input() menuTitle: string = '';
  @Input() items_menu: MenuItem[] = [];
}
