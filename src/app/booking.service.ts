import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { ListPropert } from './list-propert';
import { PropertyInfo } from './PropertyInfo';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  rooturl ="https://demo2.bhaktaniwas.com/SearchProperty?filter=%5B%7B%22FieldName%22:%22SearchText%22,%22Value%22:%22shirdi%22,%22FilterOption%22:1%7D%5D&otherParams=null&pageNo=1&pageSize=5&sort=%5B%7B%22FieldName%22:%22%22,%22Direction%22:%22%22%7D%5D"
  url ="https://demo2.bhaktaniwas.com/Details"
  constructor(private http:HttpClient) { }
  getlist(){
    return this.http.get<ListPropert>(this.rooturl);
  }
  HotelDetailsPage(PropertyGUID){
    return this.http.get(`${this.url}?propertyGUID=${PropertyGUID}&version=JSON`)
  }

}
