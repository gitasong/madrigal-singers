import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Singer } from '../singer.model';
// import { SINGERS } from './singer-data';
import { SingerService } from '../singer.service';


@Component({
  selector: 'app-singers',
  templateUrl: './singers.component.html',
  styleUrls: ['./singers.component.css'],
  providers: [SingerService]
})
export class SingersComponent implements OnInit {
  singers: Singer[];

  constructor(private router: Router, private singerService: SingerService) { }

  ngOnInit() {
    this.singers = this.singerService.getSingers();
  }

  goToDetail(clickedSinger: Singer) {
    this.router.navigate(['singers', clickedSinger.id]);
  };
}
