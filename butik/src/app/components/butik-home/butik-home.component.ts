import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'butik-home',
  templateUrl: './butik-home.component.html',
  styleUrls: ['./butik-home.component.css']
})
export class butikHomeComponent implements OnInit {

  public filterText: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  getName($event: string): void {
    this.filterText = $event;
  }
}

