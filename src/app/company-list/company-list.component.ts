import { Component, OnInit } from '@angular/core';
import { Company } from '../company'
import { AirtableService } from '../airtable/airtable.service'

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})

export class CompanyListComponent implements OnInit {
  loading = true;
  displayedColumns: string[] = ['id', 'name', 'rating'];
  
  //this is just dummy data
  companies: Company[] = [
    {id: 1, name: 'Walmart', rating: 4},
    {id: 2, name: 'Costco', rating: 5},
    {id: 3, name: 'Target', rating: 3}
  ] 

  dataSource = this.companies

  constructor(private airtableService : AirtableService) { }

  ngOnInit(): void {

    // this.airtableService.getAPIData().subscribe(
    //   (response) => {
    //     console.log('response is ', response);
    //   },
    //   (error) => {
    //     console.log('error is ', error);
    //   }
    // );

    setTimeout(() => {
      this.loading = false;
    }, 2000)



  }



}
