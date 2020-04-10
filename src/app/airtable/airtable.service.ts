import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { AIRTABLE_API_KEY } from '../../../env'

@Injectable({
  providedIn: 'root',
})
export class AirtableService {

  private _url: string =
    'https://api.airtable.com/v0/appMzVVjn9eVT5NBG/Scores?maxRecords=3&view=Company%20Score%20Comparison';

  constructor(private http: HttpClient) {}

  // **Trying to get the method working here after storing my api key in .env. The request isn't going through though...not sure if it's because I'n using the wrong request for angular. This is the link request that works for
  //https://api.airtable.com/v0/appMzVVjn9eVT5NBG/Companies\, headers={'Authorization': "Bearer #{ENV['AIRTABLE_API_KEY']}"


  getAPIData() {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer' + 
    })

    return this.http.get(this._url, {
      headers: header
    });
  }
}
