import { Component, Input, OnInit } from '@angular/core';
import { Singer } from '../singer.model';

@Component({
  selector: 'app-edit-singer',
  templateUrl: './edit-singer.component.html',
  styleUrls: ['./edit-singer.component.css']
})

export class EditSingerComponent implements OnInit {
  @Input() selectedSinger;

  constructor() { }

  ngOnInit() {
  }

}
