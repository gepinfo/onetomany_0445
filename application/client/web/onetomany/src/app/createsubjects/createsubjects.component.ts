import { Component, OnInit } from '@angular/core';
import { CreatesubjectsService } from './createsubjects.service';

@Component({
  selector: 'app-createsubjects',
  templateUrl: './createsubjects.component.html',
  styleUrls: ['./createsubjects.component.scss'],
})

export class CreatesubjectsComponent implements OnInit {
    public subjectsentity:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        subjectid: '',
        professorname: '',
    }

    constructor (
        private createsubjectsService: CreatesubjectsService,
    ) { }

    ngOnInit() {
        this.subjectsentity.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpCreate() {
        this.createsubjectsService.GpCreate(this.subjectsentity).subscribe((data:any) => {
            this.subjectsentity.name = ''
 	 	this.subjectsentity.subjectid = ''
 	 	this.subjectsentity.professorname = ''
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
}