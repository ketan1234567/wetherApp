import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {}

  getWeather(location: any) {
    // Construct the URL with the correct query parameter
    const apiUrl = `http://api.weatherstack.com/current?access_key=44758e7e22be466e3a0d8dc56d335dbb&query=${location}`;

    return this.http.get(apiUrl);
  }
}