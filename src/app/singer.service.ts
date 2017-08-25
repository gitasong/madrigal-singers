import { Injectable } from '@angular/core';
import { Singer } from './singer.model';
import { SINGERS } from './singer-data';

@Injectable()
export class SingerService {

  constructor() { }

  getSingers() {
    return SINGERS;
  }

}
