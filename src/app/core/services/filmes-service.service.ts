import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { IFilm } from './../../components/films/film';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmesServiceService {

  private readonly routers = {
    films: `http://localhost:3000/films`,
    filmsPut: `http://localhost:3000/films/6`,
    film: (id:number) => `http://localhost:3000/films/${id}`,
    filmTitle:(year:number) => `http://localhost:3000/films/?year=${year}`
  };

  constructor(private http: HttpClient) { }

  searchFilm(year: number):Observable<IFilm[]>{
    return this.http.get<IFilm[]>(this.routers.filmTitle(year));
  }

  removeFilm(id: number):Observable<{}>{
  return this.http.delete<{}>(this.routers.film(id));
}
create(film: IFilm): Observable<IFilm> {
  return this.http.post<IFilm>(this.routers.films, film);
}
  getFilms(): Observable<IFilm[]> {
    return this.http.get<IFilm[]>(this.routers.films);
  }
  getFilmsID(id:number): Observable<IFilm> {
    return this.http.get<IFilm>(this.routers.film(id));
  }
  find(id: number): Observable<HttpResponse<IFilm>> {
    return this.http.get<IFilm>(`${this.routers.film}/${id}`, { observe: 'response' });
}
}

