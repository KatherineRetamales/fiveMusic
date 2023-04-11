import { Component, OnInit } from '@angular/core';
import { ApiSpotifyService } from '../../servicios/api-spotify.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(public api: ApiSpotifyService) { }

  ngOnInit(): void {
    this.api.getToken().subscribe(response =>{
      console.log("response",response);
    });
  }

}
