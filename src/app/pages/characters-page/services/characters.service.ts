import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  public rickAndMortyUrl: string = "https://rickandmortyapi.com/api";
  public charactersUrl: string = `${this.rickAndMortyUrl}/character`;
  public index:number = 1;
  public newPage: string = `https://rickandmortyapi.com/api/character/?page=${this.index}`;
  

  constructor(private httpClient: HttpClient) { }

  public getCharacters() {
    return this.httpClient.get(this.charactersUrl)
  }
  public getCharacter = (idCharacter: any) => {
    return this.httpClient.get(`${this.charactersUrl}/${idCharacter}`)
  }
  public nextPage () {
    return this.httpClient.get(`${this.newPage}${this.index+1}`)
  }
  
}


