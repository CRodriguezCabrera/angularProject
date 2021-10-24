import { EpisodesService } from './../../services/episodes.service';
import { Component, OnInit } from '@angular/core';
import { EpisodesInterface } from '../../models/episodesModel';

@Component({
  selector: 'app-episodies',
  templateUrl: './episodies.component.html',
  styleUrls: ['./episodies.component.scss']
})
export class EpisodiesComponent implements OnInit {
  public episodesList?: EpisodesInterface[];
  public apiResults?: EpisodesInterface; 
  constructor(private episodesService: EpisodesService) { }

  ngOnInit(): void {

    this.episodesService.getEpisodes().subscribe((element: any) => {
      const apiResults: EpisodesInterface[] = element.results;
      const formattedResults = apiResults.map(({ id, name, air_date, episode, characters }) => ({
        id,
        name,
        air_date,
        episode,
        characters
        
      }));
      this.episodesList = formattedResults;
      console.log(this.episodesList)
    })
  }

}


/* export class CharactersComponent implements OnInit {
  public charactersList?: CharacterInterface[];
  public apiResults?: CharacterInterface;
  
  constructor(private charactersService: CharactersService) { }

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
  }
  
} */