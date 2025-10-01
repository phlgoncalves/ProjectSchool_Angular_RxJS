import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar-title',
  standalone: false,
  templateUrl: './toolbar-title.component.html',
  styleUrl: './toolbar-title.component.scss'
})
export class ToolbarTitleComponent {
  @Input() title: string = '';
  iconFa: string = '';
  iconMat: string = '';
  fontSet = '';

  @Input()
  set icon(value: string) {
    if (value.includes('fa-')) {
      this.iconFa = `icon-space-mat ${value}`;
      this.fontSet = 'fa'
    } else {
      this.iconMat = value;
    }
  }
}
