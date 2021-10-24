import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {
  public rickAndMortyUrl: string = "https://rickandmortyapi.com/api";
  public episodesUrl:string = `${this.rickAndMortyUrl}/episode`;
  
  constructor(private httpClient: HttpClient) { }

  public getEpisodes() {
    return this.httpClient.get(this.episodesUrl)
  }
}


