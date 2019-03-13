import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmesServiceService } from './../../../core/services/filmes-service.service';
import {IFilm} from '../film';

@Component({
  selector: 'mov-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {
  private id: number;
  public film: IFilm;
  public errorMessages:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fs: FilmesServiceService
    ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.fs.getFilmsID(this.id).subscribe(
      films=>{
       this.film = films;
      },
      error => this.errorMessages = error as any,
      () => console.log(this.film)
    );
    
  }
  onBack(): void {
    this.router.navigate(['/films']);
  }
}
