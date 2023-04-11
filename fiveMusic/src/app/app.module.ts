import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ApiSpotifyService } from '../app/servicios/api-spotify.service';
//import { OauthInterceptor } from '@core/services/oauth-interceptor/oauth-interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoritosComponent } from './componentes/favoritos/favoritos.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { SolicitadosComponent } from './componentes/solicitados/solicitados.component';
import { AlbumComponent } from './componentes/album/album.component';
import { MusicComponent } from './componentes/music/music.component';
import { NabvarComponent } from './compartidos/nabvar/nabvar.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoritosComponent,
    InicioComponent,
    SolicitadosComponent,
    AlbumComponent,
    MusicComponent,
    NabvarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ApiSpotifyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
