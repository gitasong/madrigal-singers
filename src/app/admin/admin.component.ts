import { Component, OnInit } from '@angular/core';
import { Singer } from '../singer.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(name: string, voice: string, office: string, folder: number) {
    var newSinger: Singer = new Singer(name, voice, office, folder);
    console.log(newSinger);
  }

}
