import { Component, OnInit } from '@angular/core';
import { CreatestudentsService } from './createstudents.service';

@Component({
  selector: 'app-createstudents',
  templateUrl: './createstudents.component.html',
  styleUrls: ['./createstudents.component.scss'],
})

export class CreatestudentsComponent implements OnInit {
    public studentsentity:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        age: '',
        subjectsid: '',
        studentid: '',
    }

    constructor (
        private createstudentsService: CreatestudentsService,
    ) { }

    ngOnInit() {
        this.studentsentity.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpCreate() {
        this.createstudentsService.GpCreate(this.studentsentity).subscribe((data:any) => {
            this.studentsentity.name = ''
 	 	this.studentsentity.age = ''
 	 	this.studentsentity.subjectsid = ''
 	 	this.studentsentity.studentid = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
}