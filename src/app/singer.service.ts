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

  getSingerByID(singerID: number){
    // for (var i = 0; i <= SINGERS.length - 1; i++) {
    //   if (SINGERS[i].id === singerID) {
    //     return SINGERS[i];
    //   }
    // }
  }

}
