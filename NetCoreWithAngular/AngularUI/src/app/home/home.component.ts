import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ApiService],
})
export class HomeComponent implements OnInit {
  public value1: string;
  public value2: string;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getComments().subscribe(x => {
      // tslint:disable-next-line:no-debugger
      this.value1 = x[0];
      this.value2 = x[1];
    });
  }

}
