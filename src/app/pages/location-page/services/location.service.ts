import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  public rickAndMortyUrl: string = "https://rickandmortyapi.com/api";
  public locationsUrl: string = `${this.rickAndMortyUrl}/location`;
  constructor(private httpClient:HttpClient) { }
  
  public getLocations() {
    return this.httpClient.get(this.locationsUrl)
  }
}



