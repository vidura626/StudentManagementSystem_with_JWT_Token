import {HttpClient} from '@angular/common/http';
import {Component, inject, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {StudentInterface} from "../../../../shared/model/core/Student.interface";
import {StudentService} from "../../../../core/service/student.service";

@Component({
  selector: 'wj-view-all-students',
  templateUrl: './view-all-students.component.html',
  styleUrls: ['./view-all-students.component.scss']
})
export class ViewAllStudentsComponent implements OnInit {
  private studentService: StudentService = inject(StudentService);
  displayedColumns: string[] = ['id', 'name', 'address', 'contact', 'username', 'view'];
  pageSizeOptions: number[] = [5, 10, 25, 100];
  resultsLength = 100;
  pageSize: number = 5;
  showFirstLastButtons: boolean = true;
  pageIndex: number = 0;

  studentsList: StudentInterface[] = [
    {
      id: 1,
      name: 'Student 1',
      address: 'Address 1',
      contact: 'Contact 1',
      userDetails: {
        userName: 'Username 1',
        id: 1
      }
    }
  ];

  constructor() {
  }

  clickRow(row: StudentInterface) {
    console.log('clicked');
    console.log(row);
  }

  viewStudent(row: StudentInterface) {
    console.log('clicked');
    console.log(row);
  }

  deleteStudent(row: StudentInterface) {
    console.log('clicked');
    console.log(row);

  }

  ngOnInit(): void {
    this.studentService.getAllStudentsWithPaginator(this.pageIndex, this.pageSize).subscribe(res => {
      this.studentsList = res.data;
      this.resultsLength = res.data.length;
    });
  }

  onPageChange($event: PageEvent) {
    this.pageIndex = $event.pageIndex;
    this.pageSize = $event.pageSize;
    this.studentService.getAllStudentsWithPaginator(this.pageIndex, this.pageSize)
      .subscribe(res => {
        this.studentsList = res.data;
        this.resultsLength = res.data.length;
      });
  }
}

