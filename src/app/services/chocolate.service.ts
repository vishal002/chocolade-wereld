import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChocolateService {
  private url = environment.get_all_chocolates_details;

  constructor(private http: HttpClient) { }

  public getAllChocolates(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
