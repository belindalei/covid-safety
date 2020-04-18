import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import AirtableJson from '../../assets/airtable.json'
import { Record } from '../record' 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AirtableService {
  private _url: string =
    'https://api.airtable.com/v0/appMzVVjn9eVT5NBG/Scores?maxRecords=15&view=Company%20Score%20Comparison';

  constructor(private http: HttpClient) {}

  AIRTABLE_API_KEY = AirtableJson.AIRTABLE_API_KEY

  getAPIData(): Observable<Record[]>{ 
    
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.AIRTABLE_API_KEY}`,
    });

    return this.http.get<Record[]>(this._url, {
      headers: header,
    });
  } 
}
