import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Singer } from '../singer.model';


@Component({
  selector: 'app-singer-detail',
  templateUrl: './singer-detail.component.html',
  styleUrls: ['./singer-detail.component.css']
})
export class SingerDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
