import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Singer } from '../singer.model';

@Component({
  selector: 'app-singers',
  templateUrl: './singers.component.html',
  styleUrls: ['./singers.component.css']
})
export class SingersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
