import { Injectable } from '@angular/core';
import { Band } from '../band';
import { BANDS } from '../mock-bands';

@Injectable({
  providedIn: 'root'
})
export class BandService {

  getBands(): Band[] {
    return BANDS;
  }

  constructor() { }
}
