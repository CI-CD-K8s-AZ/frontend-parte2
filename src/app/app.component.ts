import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  names = [];
  colors = [];

  name = null;
  color = null;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(environment.API_BASE_URL + "/names/").subscribe((data: any) => {
      this.names = data;
    });

    this.httpClient.get(environment.API_BASE_URL + "/colors/").subscribe((data: any) => {
      this.colors = data;
    });

    this.httpClient.get(environment.API_BASE_URL + "/names/random").subscribe((data: any) => {
      this.name = data;
    });

    this.httpClient.get(environment.API_BASE_URL + "/colors/random").subscribe((data: any) => {
      this.color = data;
    });
  }

}
