import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Film } from '../models/Films';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecupFilmsService {
  rechercherFilms(searchQuery: string) {
    throw new Error('Method not implemented.');
  }

    // Initialise le favo avec le contenu stocké dans le localStorage
    private favo: Film[] = JSON.parse(localStorage.getItem('favo') || '[]');
    // Initialise un BehaviorSubject avec le contenu du favo
    private favoSubject: BehaviorSubject<Film[]> = new BehaviorSubject<Film[]>(this.favo);
  

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer la liste des films populaires à partir de l'API TMDb
  getFilmsPopulaires(): Observable<Film[]> {
    return this.http.get(environment.apiBaseUrl + 'movie/popular?api_key=' + environment.keyAPI)
    .pipe(map((resultat: any) => resultat.results));
  }

  // Méthode pour récupérer les détails d'un film à partir de l'API TMDb
  getDetailsFilm(id: number): Observable<any> {
    return this.http.get(environment.apiBaseUrl + `movie/${id}?api_key=` + environment.keyAPI);
  }
  getDetailsImage(id: number): Observable<any> {
    return this.http.get(environment.apiBaseUrl + `image/${id}?api_key=` + environment.keyAPI);
  }
   // Méthode pour récupérer la liste des 4 films à venir à partir de l'API TMDb
   getFilmsAVenir(): Observable<Film[]> {
    return this.http.get(environment.apiBaseUrl + '/movie/upcoming?api_key=' + environment.keyAPI)
      .pipe(
        map((resultat: any) => resultat.results.slice(0,3))
      );
  }

  getFilms(): Observable<Film[]> {
    // Crée une URL pour récupérer la liste des films populaires à partir de l'API TMDb
    const url = `${environment.apiBaseUrl}movie/popular?api_key=${environment.keyAPI}&language=en-US&page=1`;
    // Envoie une requête HTTP GET à l'URL pour récupérer les films populaires
    // et retourne un Observable qui émettra la réponse sous la forme d'un tableau d'objets de type Film
    return this.http.get<Film[]>(url);
  }
  
  searchFilms(query: string): Observable<Film[]> {
    // Crée une URL pour effectuer une recherche de films à partir de l'API TMDb avec la requête "query"
    const url = `${environment.apiBaseUrl}search/movie?api_key=${environment.keyAPI}&language=en-US&page=1&include_adult=false&query=${query}`;
    // Envoie une requête HTTP GET à l'URL pour récupérer les films correspondant à la requête
    // et retourne un Observable qui émettra la réponse sous la forme d'un tableau d'objets de type Film
    return this.http.get<Film[]>(url);
  }
  
  // Fonction qui ajoute un produit au panier
  getFilmsFavoris(leFilm: Film): void {
    // Ajoute le produit à la fin du tableau panier
    this.favo.push(leFilm);
    // Emet le nouveau contenu du panier aux abonnés (sous forme d'un BehaviorSubject)
    this.favoSubject.next(this.favo);
    // Stocke le panier dans le localStorage
    localStorage.setItem('favo', JSON.stringify(this.favo));
    // Affiche le contenu du panier dans la console (pour debug)
    console.log(this.favo);
  }

  
  checkFilmFavori(movie: any): boolean {
    // Récupère les films favoris depuis le localStorage
    const favo: any = localStorage.getItem('favo');
    if (favo) {
      // Si des films favoris ont été trouvés, les stocke dans un tableau
      const favoris = JSON.parse(favo);
      // Boucle à travers le tableau des favoris
      for (let i = 0; i < favoris.length; i++) {
        // Vérifie si le film donné en entrée est présent dans les favoris
        if (favoris[i].id === movie.id) {
          // Si oui, renvoie true
          return true;
        }
      }
    }
    // Si le film n'est pas présent dans les favoris, renvoie false
    return false;
}

}

/* Méthode pour récupérer le film suivant à partir de l'API TMDb
  getFilmSuivant(id: number): Observable<any> {
    return this.http.get(environment.apiBaseUrl + `/${id + 1}?api_key=` + environment.keyAPI);
  }
   Méthode pour récupérer le film précédent à partir de l'API TMDb
  getFilmPrecedent(id: number): Observable<any> {
    return this.http.get(environment.apiBaseUrl + `/${id - 1}?api_key=` + environment.keyAPI);
  } */