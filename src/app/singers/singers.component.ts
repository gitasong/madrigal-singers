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

  constructor(private router: Router) { }

  singers: Singer[] = [
    new Singer("Lennie Cottrell", "Tenor 2", "conductor, co-director", 0, 1),
    new Singer("Nicole Freed", "Soprano 1", "co-director", 1, 2),
    new Singer("Nathan Daniel", "Tenor 1", "treasurer, section leader", 2, 3),
    new Singer("Alex Ibiza", "Alto 1", "secretary, section leader", 3, 4),
    new Singer("Omeran Abatu", "Baritone/Bass 1", "webmaster, section leader", 4, 5),
    new Singer("Cindy Serrano", "Soprano 2", "singer, section leader", 5, 6),
    new Singer("Kimiko Shuri", "Alto 2", "singer, publicity", 6, 7)
  ];

  ngOnInit() {
  }

  goToDetail(clickedSinger: Singer) {
    this.router.navigate(['singers', clickedSinger.id]);
  };
}
