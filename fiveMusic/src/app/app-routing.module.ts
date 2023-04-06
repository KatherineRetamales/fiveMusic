import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { FavoritosComponent } from './componentes/favoritos/favoritos.component';
import { SolicitadosComponent } from './componentes/solicitados/solicitados.component';
import { AlbumComponent } from './componentes/album/album.component';
import { MusicComponent } from './componentes/music/music.component';
const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'favorito', component: FavoritosComponent },
  { path: 'solicitado', component: SolicitadosComponent },
  { path: 'album', component: AlbumComponent },
  { path: 'music', component: MusicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
