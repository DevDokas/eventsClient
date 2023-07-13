import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgIf, NgFor } from '@angular/common';
import { FetchApiService } from 'src/app/services/fetch-api.service';
import { IEvent } from 'src/app/interface/i-event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel-main',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    NgbCarouselModule,
  ],
  providers: [NgbCarouselConfig],
  templateUrl: './carousel-main.component.html',
  styleUrls: ['./carousel-main.component.scss']
})
export class CarouselMainComponent implements OnInit {
  public fetchEventsRes: IEvent[] = [];

  constructor(
    private router: Router,
    private fetchApiService: FetchApiService,
    public ngbCarouselConfig: NgbCarouselConfig,
    ) {
    ngbCarouselConfig.showNavigationIndicators = false
  }

  ngOnInit(): void {
    this.catchEventos()
  }

  public catchEventos() {
    this.fetchApiService.getEvents().subscribe(
      (res) => {
        this.fetchEventsRes = res
        console.log(this.fetchEventsRes)
      }
    )
  }

  public visitEvent(id: string) {
    this.router.navigate([`/evento/${id}`])
  }
}
