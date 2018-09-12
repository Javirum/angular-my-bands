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
    return of(BANDS);
  }

  constructor(private messageService: MessageService) { }
}
