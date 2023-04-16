import { Component, OnInit } from '@angular/core';
import { RecupFilmsService } from 'src/app/service/recupfilms.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  filmsAVenir: any[] = [];

  constructor(private recupFilmsService: RecupFilmsService) { }

  ngOnInit() {
    this.recupFilmsService.getFilmsAVenir().subscribe((data) => {
      this.filmsAVenir = data.slice(0, 3); // afficher les 3 premiers films à venir
    });
  }
}
