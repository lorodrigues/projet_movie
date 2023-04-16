import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ListMovieComponent } from './component/list-movie/list-movie.component';
import { MovieDetailsComponent } from './component/movie-details/movie-details.component';
import { FavorisComponent } from './component/favoris/favoris.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'list', component: ListMovieComponent },
    { path: 'details/:id', component: MovieDetailsComponent },
    { path: 'favoris', component: FavorisComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
