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

  public getLowestPriceAndOtherDetails(priceArr) {
    if (priceArr.length === 0) {
      return { pricePer100G: 0, shop: '', link: '' }
    }
    const finalArr = priceArr.map(item => {
      return {
        pricePer100G: 100 * (item.unit === 'g' ? item.price / item.amount : item.price / (item.amount * 1000)),
        ...item
      }
    });
    finalArr.sort((a, b) => a.pricePer100G - b.pricePer100G);
    return finalArr[0];
  }

  getAveragePrice(priceArr) {
    if (priceArr.length === 0) {
      return 0
    }
    const finalArr = priceArr.map(item => {
      return 100 * (item.unit === 'g' ? item.price / item.amount : item.price / (item.amount * 1000))
    })
    return finalArr.reduce((a, b) => (a + b) / finalArr.length);
  }
}
