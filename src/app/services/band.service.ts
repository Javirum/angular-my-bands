import { Injectable } from '@angular/core';
import { Band } from '../band';
import { BANDS } from '../mock-bands';
import { Observable, of } from 'rxjs';
import { MessageService } from '../services/message.service';


@Injectable({
  providedIn: 'root'
})
export class BandService {

  getBands(): Observable<Band[]> {
    // TODO: send the message _after_ fetching the bands
    this.messageService.add('BandService: fetched heroes');
    return of(BANDS);
  }

  constructor(private messageService: MessageService) { }
}
