import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecupFilmsService } from 'src/app/service/recupfilms.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: `./movie-details.component.html`,
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: any;
  item: any;

  constructor(
    private recupFilmsService: RecupFilmsService,
    private route: ActivatedRoute
  ) { }

  // La méthode ngOnInit est appelée lorsque le composant est initialisé
// Ici, on récupère l'id du film passé en paramètre de l'URL et on appelle la méthode getDetailsFilm() du service pour récupérer les détails du film
ngOnInit() {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.recupFilmsService.getDetailsFilm(id).subscribe((data) => {
  this.movie = data;
  });
  }
  
  // Méthode pour ajouter un film aux favoris
  addToFavorites(movie: any) {
  // On vérifie si le film est déjà présent dans la liste des favoris
  const isPresent = this.recupFilmsService.checkFilmFavori(movie);
  if (!isPresent) { // Si le film n'est pas présent, on l'ajoute et on affiche un message
  this.recupFilmsService.getFilmsFavoris(movie);
  alert('Le film a été ajouté à vos favoris.');
  } else { // Sinon, on affiche un message pour indiquer que le film est déjà présent dans la liste des favoris
  alert('Le film est déjà présent dans vos favoris.');
  }
  }

  
}



/*precedent() {
  if (this.currentId > 1) {
    this.currentId--;
    this.recupFilmsService.getDetailsFilm(this.currentId).subscribe(
      (data) => {
        // Le film a été trouvé, on l'affiche
        this.movie = data;
      },
      (error) => {
        // Le film n'a pas été trouvé, on passe au précédent
        if (error.status === 404) {
          this.precedent();
        }
      }
    );
  }
}
 
suivant() {
  this.currentId++;
  this.recupFilmsService.getDetailsFilm(this.currentId).subscribe(
    (data) => {
      // Le film a été trouvé, on l'affiche
      this.movie = data;
    },
    (error) => {
      // Le film n'a pas été trouvé, on passe au suivant
      if (error.status === 404) {
        this.suivant();
      }
    }
  );
}
*/
