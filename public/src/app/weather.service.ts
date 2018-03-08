import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class WeatherService {

  constructor(private _http: Http) { }

  getWeather(lat,lon){
    var lat: any = lat;
    var lon: any = lon;
    var base = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon;
    var key = "&&APPID=eebc7591f523e687d0bbca39baaf4cf3";
    var unit = "&units=imperial";
    var url = base + key + unit;

    return this._http.get(url).map(data => data.json()).toPromise()
  }

}
