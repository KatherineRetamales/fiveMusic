import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiSpotifyService {
  private options: any = {};

  constructor(private http: HttpClient) {
    const httpHeaders: Object = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });
    this.options = { headers: httpHeaders };
  }

  getToken() {
    var urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "client_credentials");
    urlencoded.append("client_id", "039ec1fab561439a925b9fa0d65d3c76");
    urlencoded.append("client_secret", "69dd3ccae5904acba5fe34b63aa2749a");

    const body = urlencoded;
    let options = { ...this.options, ...{ body: body } };
    return this.http.request("POST", "https://accounts.spotify.com/api/token",options)
  }

  
}
