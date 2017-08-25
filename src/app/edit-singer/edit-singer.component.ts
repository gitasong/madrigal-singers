import { Component, Input, OnInit } from '@angular/core';
import { Singer } from '../singer.model';
import { SingerService } from '../singer.service';

@Component({
  selector: 'app-edit-singer',
  templateUrl: './edit-singer.component.html',
  styleUrls: ['./edit-singer.component.css'],
  providers: [SingerService]
})

export class EditSingerComponent implements OnInit {
  @Input() selectedSinger;

  constructor(private singerService: SingerService) { }

  ngOnInit() {
  }

  beginUpdating(singerToUpdate){
    this.singerService.updateSinger(singerToUpdate);
  }

  confirmDelete(singerToDelete){
    if(confirm("Are you sure you want to delete this singer from the roster?")){
      this.singerService.deleteSinger(singerToDelete);
    }
  }

}
