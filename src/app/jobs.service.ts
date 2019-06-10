import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobsService {


  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get(`https://api.arbetsformedlingen.se/af/v0/platsannonser/matchning?lanid=12&nyckelord=javascript&sida=1&antalrader=200`);
  }
}



/*AF API: platsannons{ annons {yrkesbenamning, annonstext, kommunnamn, publiceraddatum, platsannonsUrl}}*/
/*https://api.arbetsformedlingen.se/af/v0/platsannonser/matchning?lanid=12&kommunid=1283&sida=1&antalrader=200     eller GET annons i platsannons, efteråt search-field with button: search in annons.annonstext, return what I searched for (frontend, javascript...) */

