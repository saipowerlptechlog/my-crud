import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public api:string="http://localhost:1122/posts"
  constructor(public http:HttpClient) { }
sai(){
  return this.http.get(this.api)
}
postdata(i){
  return this.http.post(this.api,i)
  // return this.http.post(this.API_URL,productData);
}
dell(id){
  return this.http.delete(this.api+"/"+id)
}

editProduct(idaaaaa){
  return this.http.get(this.api + "/" + idaaaaa);
}
// ubdate(id, stuID){
//   return this.http.put(this.api + "/" + id, stuID)
  // return this.http.put(this.API_URL + "/" + id, productData)



ubdate(eeiit,id){
  return this.http.put(this.api + "/" + id, eeiit)
}
}
