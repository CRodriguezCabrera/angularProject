import { HttpClient } from '@angular/common/http';
import { CharacterInterface } from './../../models/character.model';
import { CharactersService } from './../../services/characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  
  
  public charactersList?: CharacterInterface[];
  public apiResults?: CharacterInterface;
 /*  public index:number = 1;
  public newPage: string = `https://rickandmortyapi.com/api/character/?page=${this.index}`; */
  
  
  constructor(private charactersService: CharactersService, httpClient:HttpClient) { }

  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe((element: any) => {
      const apiResults: CharacterInterface[] = element.results;
      const formattedResults = apiResults.map(({ id, name, status, type, gender, image }) => ({
        id,
        name,
        status,
        type,
        gender,
        image
      }));
      this.charactersList = formattedResults;
      console.log(this.charactersList)
    })
    
   /*  public nextPage () {
      return this.httpClient.get(`${this.newPage}${this.index+1}`)
    } */
    
  }
  
  
}


/* this.charactersService.nextPage().subscribe((element: any) => {
  this.charactersList = element.results;
}) */