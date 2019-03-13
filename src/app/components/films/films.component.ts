import { FilmesServiceService } from './../../core/services/filmes-service.service';
import { Component, OnInit } from '@angular/core';
import {IFilm} from './film';


@Component({
  selector: 'mov-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {


  public title:string = "Biblioteka filmów";
  public films: IFilm[];
  public noimg:boolean=true;
  public detailsVisible = false;
  public _listFilter :string = "game";
  public filteredFilms: IFilm[];
  public errorMessages:any;


  get listFilter():string{
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter = value;
    this.filteredFilms = this.setFilters(value);
  }
  
  setFilters(filteredBy: string="asd"): IFilm[] {
    filteredBy = filteredBy.toLocaleLowerCase();
    return this.films.filter((film: IFilm) => film.title.toLocaleLowerCase().indexOf(filteredBy) !== -1);
  }
  public toggleDetails(): void {
    this.detailsVisible = !this.detailsVisible;
  }

  onDelete(id:number){
   return this.fs.removeFilm(id).subscribe();
  }

  onSearch(year:number){
    return this.fs.searchFilm(year);
  }
  constructor(private fs: FilmesServiceService) { 
   
 
   
  }

  ngOnInit() {
    this.fs.getFilms().subscribe(
     films=>{
      this.films = films;
      this.filteredFilms = this.films;
     },
     error => this.errorMessages = error as any
   );
   
  }

}
