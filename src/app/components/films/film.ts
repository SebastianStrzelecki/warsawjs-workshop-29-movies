import { Identifiers } from '@angular/compiler';

export interface IFilm {
        id?: number;
        title?: string;
        year?: string;
        genres?: string[];
        duration?: string;
        ratings?: number[];
        releaseDate?: string;
        averageRating?: number;
        originalTitle?: string;
        storyline?: string;
        actors?: string[];
        imdbRating?: number; 
        posterurl?: string;
    }
 
    
    export class Film implements IFilm {
        constructor(
           public id?: number,
           public year?: string,
           public genres?: string[],
          public duration?: string,
          public ratings?: number[],
          public title?: string,
       public releaseDate?: string,
       public averageRating?: number,
       public originalTitle?: string,
       public storyline?: string,
       public actors?: string[],
       public imdbRating?: number,
       public posterurl?: string ) {}
    }
    