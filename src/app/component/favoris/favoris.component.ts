import { Component, OnInit } from '@angular/core';
import { RecupFilmsService } from 'src/app/service/recupfilms.service';
import { Film } from 'src/app/models/Films';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit {
  favo: Film[] = [];
  favoSubject: any;

  constructor(private recupFilmsService: RecupFilmsService) { }

  // Cette fonction est appelée lorsqu'un composant est initialisé
ngOnInit(): void {
  // On récupère la valeur stockée dans le localStorage sous la clé "favo"
  let favo: any = localStorage.getItem('favo');
  // On vérifie si une valeur a été trouvée
  if (favo) {
  // Si oui, on parse la valeur en JSON et on la stocke dans la variable "this.favo"
  this.favo = JSON.parse(favo);
  // On affiche dans la console la valeur stockée dans "this.favo"
  console.log(this.favo);
  // On affiche dans la console un message de confirmation
  console.log("Votre Film a bien été envoyé dans la liste des favoris")
  }
  }
  

/*  supprimerFilmFavori(leFilm: any): void {
    const index = this.favo.indexOf(leFilm);
    if (index !== -1) {
      this.favo.splice(index, 1);
      localStorage.setItem('favo', JSON.stringify(this.favo));
      this.favoSubject.next(this.favo);
    }
  }
}
*/
}