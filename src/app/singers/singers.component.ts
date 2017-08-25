import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Singer } from '../singer.model';
import { SingerService } from '../singer.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-singers',
  templateUrl: './singers.component.html',
  styleUrls: ['./singers.component.css'],
  providers: [SingerService]
})
export class SingersComponent implements OnInit {
  singers: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private singerService: SingerService) { }

  ngOnInit() {
    this.singers = this.singerService.getSingers();
  }

  goToDetail(clickedSinger) {
    this.router.navigate(['singers', clickedSinger.$key]);
  };
}
