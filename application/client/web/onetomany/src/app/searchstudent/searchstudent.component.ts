import { Component, OnInit } from '@angular/core';
import { SearchstudentService } from './searchstudent.service';

@Component({
  selector: 'app-searchstudent',
  templateUrl: './searchstudent.component.html',
  styleUrls: ['./searchstudent.component.scss'],
})

export class SearchstudentComponent implements OnInit {
    columnDefs: any = [{ headerName: 'Name', field: 'name'  },{ headerName: 'Age', field: 'age'  },{ headerName: 'Student ID', field: 'studentid'  },{ headerName: 'Subjects ID', field: 'subjectsid'  },];
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
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private searchstudentService: SearchstudentService,
    ) { }

    ngOnInit() {
        this.studentsentity.created_by = sessionStorage.getItem('email') || ''; 
        this.GpGetAllValues();
    }
    GpSearchRelationship() {
        this.searchstudentService.GpSearchRelationship(this.studentsentity).subscribe((data:any) => {
            this.rowData = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
    GpGetAllValues() {
        this.searchstudentService.GpGetAllValues().subscribe((data:any) => {
            this.rowData = data;
        },
        (error:Error) => {
            console.log('Error', error);
        });
    }
}