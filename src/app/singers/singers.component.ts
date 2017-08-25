import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Singer } from '../singer.model';
// import { SINGERS } from './singer-data';


@Component({
  selector: 'app-singers',
  templateUrl: './singers.component.html',
  styleUrls: ['./singers.component.css']
})
export class SingersComponent implements OnInit {
  singers: Singer[];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDetail(clickedSinger: Singer) {
    this.router.navigate(['singers', clickedSinger.id]);
  };
}
