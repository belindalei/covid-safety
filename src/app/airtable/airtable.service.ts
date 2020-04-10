import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root',
})
export class AirtableService {
  constructor(private http: HttpClient) {}

  // **Trying to get the method working here after storing my api key in .env. The request isn't going through though...not sure if it's because I'n using the wrong request for angular. This is the link request that works for ruby
  //https://api.airtable.com/v0/appMzVVjn9eVT5NBG/Companies\, headers={'Authorization': "Bearer #{ENV['AIRTABLE_API_KEY']}"
  // getAPIData() {
  //   return this.http.get();
  // }

}
