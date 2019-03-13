import { HttpClientModule } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MojComponent} from './components/new';
import { AppComponent } from './app.component';
import {LayoutComponent} from './components/shared/layout/layout.component';
import { FilmsComponent } from './components/films/films.component';
import { FilmAddComponent } from './components/films/films-add/film-add.component';
import { MatButtonModule } from '@angular/material/button';
import { StarsComponent } from './components/stars/stars.component';
import { RouterModule } from '@angular/router';
import { FilmDetailsComponent } from './components/films/film-details/film-details.component';
import { FormsModule } from '@angular/forms';
import { FirstUpperPipe } from './components/shared/pipes/first-upper.pipe';
import { Film } from './components/films/film'
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { Observable, of } from 'rxjs';
import { FilmesServiceService } from  './core/services/filmes-service.service';
import { filter, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Filmesolve implements Resolve<Film> {
  constructor(private fs: FilmesServiceService) {}
  resolve(    route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Film> {
  //   const id = route.params['id'] ? route.params['id'] : null;
  //   if (id) {
  //     return this.fs.find(id).pipe(
  //         filter((response: HttpResponse<Film>) => response.ok),
  //         map((book: HttpResponse<Film>) => book.body)
  //     );
  // }
      return of(new Film());
  }
}

const routes = [
  {
    path: 'films',
    component: FilmsComponent
  },
  {
    path: 'films/add',
    component: FilmAddComponent,
    resolve: {
      film: Filmesolve
  }
  },
  {
    path: 'film/:id', // 'films/:id/:year'
    component: FilmDetailsComponent
  },
  {
    path: '',
    redirectTo: 'films', 
    pathMatch: 'full' // dopasowanie
  },
  {
    path: '**',
    component: FilmsComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    MojComponent,
    LayoutComponent,
    FilmsComponent,
    StarsComponent,
    FilmDetailsComponent,
    FirstUpperPipe,
    FilmAddComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    RouterModule.forRoot(routes,{useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
