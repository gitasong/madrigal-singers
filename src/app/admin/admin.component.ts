import { Component, OnInit } from '@angular/core';
import { SingerService } from '../singer.service';
import { Singer } from '../singer.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [SingerService]
})

export class AdminComponent implements OnInit {

  constructor(private singerService: SingerService) { }

  ngOnInit() {
  }

  submitForm(name: string, voice: string, office: string, folder: number) {
    var newSinger: Singer = new Singer(name, voice, office, folder);
    console.log(newSinger);
  }

}
