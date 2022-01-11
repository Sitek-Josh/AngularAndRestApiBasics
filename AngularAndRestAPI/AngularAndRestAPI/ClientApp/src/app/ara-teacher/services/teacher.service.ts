import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginatedResults } from '../../ara-common/models/paginated-results.model';
import { Teacher } from '../models/teacher.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherService extends BaseService{

  constructor(private http: HttpClient) {
    super();
  }

  getTeachers(): Observable<Array<Teacher>> {
    return this.http.get<Array<Teacher>>('api/teachers');
  }
}
