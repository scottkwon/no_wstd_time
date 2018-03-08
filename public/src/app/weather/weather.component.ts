import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private _weatherService: WeatherService) { }

  tempavg;
  picture;
  location;

  ngOnInit() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.location = position.coords;
        this.getWeather();
      })
    }
  }

  getWeather(){
    this._weatherService.getWeather(this.location.latitude, this.location.longitude)
    .then( weather => {
      this.tempavg = weather.main['temp'];
      this.picture = "http://openweathermap.org/img/w/"+ weather.weather[0]['icon'] + ".png";
      this.location = weather.name;
    })
    .catch( err => {
      console.log(err);
    })
  }

}
