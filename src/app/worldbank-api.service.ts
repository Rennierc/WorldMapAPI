import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorldbankApiService {

  constructor(private http: HttpClient) { }

  getCountryData(countryId: string): Observable<any> {
    // Use the /api prefix to ensure the request is routed through the proxy
    const url = `/api/v2/country/${countryId}?format=json`;
    
    return this.http.get<any>(url);
  }
}
