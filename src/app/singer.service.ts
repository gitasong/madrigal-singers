import { Injectable } from '@angular/core';
import { Singer } from './singer.model';
import { SINGERS } from './singer-data';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class SingerService {
  singers: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.singers = database.list('singers');
  }

  getSingers() {
    return this.singers;
  }

  addSinger(newSinger: Singer) {
    this.singers.push(newSinger);
  }

  getSingerByID(singerID: string){
    return this.database.object('singers/' + singerID);
  }

  updateSinger(localUpdatedSinger){
    var albumEntryInFirebase = this.getSingerByID(localUpdatedSinger.$key);
    albumEntryInFirebase.update({name: localUpdatedSinger.name,
                                voice: localUpdatedSinger.voice,
                                office: localUpdatedSinger.office,
                                folder: localUpdatedSinger.folder});
  }

}
