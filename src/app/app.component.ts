import {Component} from '@angular/core';

@Component({
  selector: 'wj-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StudentManagementSystem';
  isOpend: boolean = false;

  setOpened() {
   this.isOpend = !this.isOpend;
  }
}
