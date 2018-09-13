import { Injectable } from '@angular/core';
import { Band } from '../band';
import { BANDS } from '../mock-bands';
import { Observable, of } from 'rxjs';
import { MessageService } from '../services/message.service';


@Injectable({
  providedIn: 'root'
})
export class BandService {

  constructor(private messageService: MessageService) { }

  getBands(): Observable<Band[]> {
    // TODO: send the message _after_ fetching the bands
    this.messageService.add('BandService: fetched bands');
    return of(BANDS);
  }

  getBand(id: number): Observable<Band> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`BandService: fetched band id=${id}`);
    return of(BANDS.find(band => band.id === id));
  }
}

