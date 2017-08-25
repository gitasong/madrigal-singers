import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Singer } from '../singer.model';
import { SingerService } from '../singer.service';


@Component({
  selector: 'app-singer-detail',
  templateUrl: './singer-detail.component.html',
  styleUrls: ['./singer-detail.component.css'],
  providers: [SingerService]
})

export class SingerDetailComponent implements OnInit {
  singerID: string;
  singerToDisplay: Singer;

  constructor(private route: ActivatedRoute, private location: Location, private singerService: SingerService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.singerID = urlParameters['id'];
    });
    // this.singerToDisplay = this.singerService.getSingerByID(this.singerID);
  }

}
