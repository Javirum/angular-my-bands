import { Injectable } from '@angular/core';
import { Band } from '../band';
import { BANDS } from '../mock-bands';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BandService {

  getBands(): Observable<Band[]> {
    return of(BANDS);
  }

  constructor() { }
}
