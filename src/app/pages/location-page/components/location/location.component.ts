import { LocationInterface } from './../../models/locationModel';
import { LocationService } from './../../services/location.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  public locationList?: LocationInterface [] 
  public apiResults?: LocationInterface;
 
  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.locationService.getLocations().subscribe((element: any) => {
      const apiResults: LocationInterface[] = element.results;
      const formattedResults = apiResults.map(({ id, name, type, dimension}) => ({
        id,
        name,
        type,
        dimension
      }))
      this.locationList = formattedResults;
      console.log(this.locationList);
    })

  }

}
/* 
export class CharactersComponent implements OnInit {
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
  
}
 */