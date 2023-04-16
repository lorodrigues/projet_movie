import { Component, OnInit } from '@angular/core';
import { RecupFilmsService } from 'src/app/service/recupfilms.service';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {
  movies: any;

  constructor(private recupFilmsService: RecupFilmsService) {}

  ngOnInit() {
    this.recupFilmsService.getFilmsPopulaires().subscribe((data) => {
      this.movies = data;
    });
  }
}
