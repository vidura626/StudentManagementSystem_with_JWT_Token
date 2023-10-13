import { Component } from '@angular/core';

@Component({
  selector: 'wj-toggle-theme',
  templateUrl: './toggle-theme.component.html',
  styleUrls: ['./toggle-theme.component.scss']
})
export class ToggleThemeComponent {
  isDarkMode: boolean = false;

}
