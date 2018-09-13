import { Component, OnInit, Input } from '@angular/core';
import { Band } from '../band';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BandService } from '../services/band.service';


@Component({
  selector: 'app-band-detail',
  templateUrl: './band-detail.component.html',
  styleUrls: ['./band-detail.component.css']
})
export class BandDetailComponent implements OnInit {
  @Input() band: Band;

  constructor(
    private route: ActivatedRoute,
    private bandService: BandService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getBand();
  }

  getBand(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bandService.getBand(id)
      .subscribe(band => this.band = band);
  }

  goBack(): void {
    this.location.back();
  }

}
