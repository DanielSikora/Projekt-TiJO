import {Component, Input } from '@angular/core';

@Component({
  selector: 'butik-item',
  templateUrl: './butik-item.component.html',
  styleUrls: ['./butik-item.component.css']
})
export class butikItemComponent {
  @Input() image?: string;
  @Input() title?: string;
  @Input() rozmiar?: number;
  @Input() id?: number;
  @Input() price?: number;
}
