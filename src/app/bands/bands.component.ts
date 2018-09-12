import { Component, OnInit } from '@angular/core';
import { Band } from '../band';
import { BandService } from '../services/band.service';


@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.css']
})

export class BandsComponent implements OnInit {

  bands: Band[];

  selectedBand: Band;

  constructor(private bandService: BandService) {
  }

  ngOnInit() {
    this.getBands();
  }

  getBands(): void {
    this.bands = this.bandService.getBands();
  }

  onSelect(band: Band): void {
    this.selectedBand = band;
  }

}
