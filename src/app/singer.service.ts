import { Injectable } from '@angular/core';
import { Singer } from './singer.model';
import { SINGERS } from './singer-data';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class SingerService {

  constructor() { }

  getSingers() {
    return SINGERS;
  }

  getSingerByID(singerID: number){
    for (var i = 0; i <= SINGERS.length - 1; i++) {
      if (SINGERS[i].id === singerID) {
        return SINGERS[i];
      }
    }
  }

}
