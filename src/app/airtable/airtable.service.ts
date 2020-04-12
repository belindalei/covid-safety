import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import AirtableJson from '../../assets/airtable.json'

@Injectable({
  providedIn: 'root',
})
export class AirtableService {
  private _url: string =
    'https://api.airtable.com/v0/appMzVVjn9eVT5NBG/Scores?maxRecords=3&view=Company%20Score%20Comparison';

  constructor(private http: HttpClient) {}

  AIRTABLE_API_KEY = AirtableJson.AIRTABLE_API_KEY

  getAPIData() { 
    
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.AIRTABLE_API_KEY}`,
    });

    return this.http.get(this._url, {
      headers: header,
    });
  } 
}
