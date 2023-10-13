import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'wj-dashboard-buttons',
  templateUrl: './dashboard-buttons.component.html',
  styleUrls: ['./dashboard-buttons.component.scss']
})
export class DashboardButtonsComponent implements OnInit {
  @Input() role!: string;

  panelOpenState = false;

  isStudent: boolean = false;
  isTeacher: boolean = false;
  isAdmin: boolean = false;


  ngOnInit(): void {
    if (this.role === 'teacher') {
      this.isTeacher = true;
    } else if (this.role === 'student') {
      this.isStudent = true;
    } else if (this.role === 'admin') {
      this.isAdmin = true;
    }
  }

}
