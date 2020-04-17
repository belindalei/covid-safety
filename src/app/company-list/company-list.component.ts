import { Component, OnInit } from '@angular/core';
import { AirtableService } from '../airtable/airtable.service'
import { Record } from '../record'

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})

export class CompanyListComponent implements OnInit {
  loading = true;
  displayedColumns: string[] = ['name', 'score'];
  selectedCompany: Record;

  public records = [];

  dataSource = this.records;

  constructor(private _airtableService : AirtableService) { }

  ngOnInit() {

    //gets all the data of all the stores
    this._airtableService.getAPIData()
      .subscribe((response) => {
        // console.log('response is ', response["records"]);
        let responses = response["records"]
        responses.forEach(response => {
          this.records.push(response.fields)
        })
      },
      (error) => {
        console.log('error is ', error);
      }
    );

    console.log("records", this.records)
    
    //has the loading button for the page
    setTimeout(() => {
      this.loading = false;
    }, 2000)
  }

  //assigns the clicked hero from the template to compenent's selected company
  onSelect(record: Record): void {
    this.selectedCompany = record;
  }


  // this is just dummy data
  // companies: Company[] = [
  //   {id: 1, name: 'Walmart', rating: 4},
  //   {id: 2, name: 'Costco', rating: 5},
  //   {id: 3, name: 'Target', rating: 3}
  // ] 

  





}
