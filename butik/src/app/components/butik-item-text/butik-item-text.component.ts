import {Component, Input} from '@angular/core';

@Component({
  selector: 'butik-item-text',
  templateUrl: './butik-item-text.component.html',
  styleUrls: ['./butik-item-text.component.css']
})
export class butikItemTextComponent {
  @Input() title?: string;
  @Input() price?: number;
  @Input() rozmiar?: number;
  @Input() id?: number;
}
