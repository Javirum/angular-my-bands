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

  band: Band = {
    id: 1,
    name: 'Java and the Scripts',
    genre: 'Angular Rock & Roll',

  };

  constructor() {
  }

  ngOnInit() {
  }

}
