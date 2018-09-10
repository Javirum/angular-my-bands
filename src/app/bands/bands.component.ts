import { Component, OnInit } from '@angular/core';
import { Band } from '../band';

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.css']
})

export class BandsComponent implements OnInit {

  band: Band = {
    id: 1,
    name: 'Java and the Scripts'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
