import { Component, OnInit } from '@angular/core';
import { Band } from '../band';
import { BANDS } from '../mock-bands';

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.css']
})

export class BandsComponent implements OnInit {

  bands = BANDS;

  selectedBand: Band;

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(band: Band): void {
    this.selectedBand = band;
  }

}
