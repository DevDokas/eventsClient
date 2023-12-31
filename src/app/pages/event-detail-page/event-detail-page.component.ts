import { Component, OnInit } from '@angular/core';
import { FetchApiService } from 'src/app/services/fetch-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-detail-page',
  templateUrl: './event-detail-page.component.html',
  styleUrls: ['./event-detail-page.component.scss']
})
export class EventDetailPageComponent implements OnInit {

  public fetchRes: Array<string> | any = [];

  public eventId: string = "";

  constructor(
    private fetchApiService: FetchApiService,
    private activatedRoute: ActivatedRoute
    ) {
    this.activatedRoute.params.subscribe((params) => this.eventId = params['id'])
  }

  ngOnInit(): void {
    console.log(this.eventId.toString())
    this.catchEventoInfo(this.eventId.toString())
  }

  catchEventoInfo(id: string) {
    this.fetchApiService.getEventInfo(id).subscribe((res) => {
      this.fetchRes = res
      console.log(res)
    })
  }
}
