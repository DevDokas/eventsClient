import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

  public timer = 5;

  constructor(public router: Router) { }

  ngOnInit(): void {
    // TODO: CORRIGIR BUG DO CONTADOR QUE SÓ RODA 1 LOOP

    setTimeout(() => {
      this.router.navigate([''])
    }, 5000)
  }

}
