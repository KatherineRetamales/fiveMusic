import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoritosComponent } from './componentes/favoritos/favoritos.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { SolicitadosComponent } from './componentes/solicitados/solicitados.component';
import { AlbumComponent } from './componentes/album/album.component';
import { MusicComponent } from './componentes/music/music.component';
import { NabvarComponent } from './compartidos/nabvar/nabvar.component';
import { PlayComponent } from './componentes/play/play.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoritosComponent,
    InicioComponent,
    SolicitadosComponent,
    AlbumComponent,
    MusicComponent,
    NabvarComponent,
    PlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
