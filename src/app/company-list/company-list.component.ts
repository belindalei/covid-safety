import { Component, OnInit } from '@angular/core';
import { Company } from '../company'

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})

export class CompanyListComponent implements OnInit {
  loading = true;
  displayedColumns: string[] = ['id', 'name', 'rating'];
  companies: Company[] = [
    {id: 1, name: 'Walmart', rating: 4},
    {id: 2, name: 'Costco', rating: 5},
    {id: 3, name: 'Target', rating: 3}
  ] 

  dataSource = this.companies

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      this.loading = false;
    }, 2000)

  }



}
