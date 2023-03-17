import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Zajecia1202';
  ADRES_BAZOWY ="http://api.weatherapi.com/v1"
  ENDPOINT_PROGNOZA = "/forecast.json"
  ENDPOINT_OBECNA = "/current.json"
  ENDPOINT_MECZE = "/sports.json"
  PARAMETR_KLUCZ = "key"
  PARAMETR_DNI = "days"
  PARAMETR_LOKALIZACJA = "q"
  constructor(private http: HttpClient) {
    this.sprawdzPogode("224add26cf4c4e7c8e8141024231202",2,"Oslo" )
  }

  sprawdzPogode(kluczAPI: string, dni: number, lokalizacja: string) {
    this.http.get(this.ADRES_BAZOWY + this.ENDPOINT_PROGNOZA, {
      params: {
        key: kluczAPI,
        days: dni,
        q: lokalizacja
      }
    }).subscribe({
      next: value => {
        console.log(value)
      },
      error: err => {
        console.log("Error")
        console.log(err)
      }
    })
  }
}
