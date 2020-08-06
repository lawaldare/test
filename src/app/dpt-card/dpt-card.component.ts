import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dpt-card',
  templateUrl: './dpt-card.component.html',
  styleUrls: ['./dpt-card.component.scss']
})
export class DptCardComponent implements OnInit {

  @Input() department;

  constructor() { }

  ngOnInit(): void {
  }

}
