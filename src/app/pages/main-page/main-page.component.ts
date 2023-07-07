import { Component, OnInit } from '@angular/core';
import { FetchApiService } from 'src/app/services/fetch-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public fetchRes: Array<string> | any = [];

  constructor(private fetchApiService: FetchApiService, private router: Router) {
  }

  ngOnInit(): void {
    this.catchEventos()
    }

  catchEventos() {
    this.fetchApiService.getEvents().subscribe((res) => {
      this.fetchRes = res
      console.log(res)
    })
  }

  visitEventos(id: string) {
    this.router.navigate([`/main/${id}`])
  }
}
