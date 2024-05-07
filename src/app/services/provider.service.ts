import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Provider } from '../models';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  // injection d'un objet HttpClient dans le constructeur
  constructor(private http:HttpClient) { }
  token:any = sessionStorage.getItem('jwtToken');
  getProviders()
  {
    const headers = new HttpHeaders({ Authorization: 'Bearer '+this.token});
    return this.http.get<Provider[]>(environment.baseUrl+"/providers",{headers});
  }

  addProvider(provider:Provider)
  {
    const headers = new HttpHeaders({ Authorization: 'Bearer '+this.token});
    return this.http.post<Provider>(environment.baseUrl+"/providers", provider,{headers});
  }

  deleteProvider(provider:Provider)
  {
    return this.http.delete(environment.baseUrl+"/providers/"+provider.id);
  }

  updateProvider(provider:Provider)
  {
    return this.http.put<Provider>(environment.baseUrl+"/providers/"+provider.id, provider);
  }

  getProviderById(idProvider:number)
  {
    return this.http.get<Provider>(environment.baseUrl+"/providers/"+idProvider);
  }
}
