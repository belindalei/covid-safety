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

  
  // this is just dummy data
  // companies: Company[] = [
  //   {id: 1, name: 'Walmart', rating: 4},
  //   {id: 2, name: 'Costco', rating: 5},
  //   {id: 3, name: 'Target', rating: 3}
  // ] 

  public companies: Company[];

  dataSource = this.companies

  constructor(private _airtableService : AirtableService) { }

  ngOnInit(): void {

    //gets all the data of all the stores
    this._airtableService.getAPIData().subscribe(
      (response) => {
        console.log('response is ', response["records"]);
        this.companies = response["records"]
      },
      (error) => {
        console.log('error is ', error);
      }
    );
    
    //has the loading button for the page
    setTimeout(() => {
      this.loading = false;
    }, 2000)
  }





}
