import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmesServiceService } from '../../../core/services/filmes-service.service';
import {IFilm,Film} from '../film';



@Component({
  selector: 'add-film-details',
  templateUrl: './film-add.component.html',
  styleUrls: ['./film-add.component.scss']
})
export class FilmAddComponent implements OnInit {
  private id: number;
  public film: IFilm;
  public errorMessages:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fs: FilmesServiceService
    ) { }

  ngOnInit() {
  this.film = new Film();
  }
 
  save() {
    console.log(this.film);
    
    this.fs.create(this.film).subscribe((res) => this.onSaveSuccess(), (res) => this.onSaveError());
  }

onSaveSuccess(){
  console.log("udało się");
}
onSaveError(){
  console.log("nie");
}
}
