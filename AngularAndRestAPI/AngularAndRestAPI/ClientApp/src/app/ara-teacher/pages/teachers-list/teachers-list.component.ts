import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Teacher } from '../../models/teacher.model';
import { TeacherService } from '../../services/teacher.service';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css']
})
export class TeachersListComponent implements OnInit {
  modalRef?: BsModalRef;
  teachers: Array<Teacher> = [];
  @ViewChild('manageTeacher', { static: true }) manageTeacherModal: TemplateRef<any>;
  constructor(private teachersService: TeacherService,
    private modalService: BsModalService  ) { }

  ngOnInit(): void {
    this.teachersService.getTeachers().subscribe(res => {
      console.log(res);
      this.teachers = res;
    });
  }
  onAdd(): void {
    this.modalRef = this.modalService.show(this.manageTeacherModal);
    console.log('add');
  }
  onEdit(): void {
    console.log('edited');
  }
  onDelete(): void {
    console.log('deleted');
  }
  onSubmit(): void {
    this.modalRef.hide();
    console.log('submitted');
  }
  onClose(): void {
    this.modalRef.hide();
  }
}
