import {Component, Input} from '@angular/core';

@Component({
  selector: 'butik-item-image',
  templateUrl: './butik-item-image.component.html',
  styleUrls: ['./butik-item-image.component.css']
})
export class butikItemImageComponent {
  @Input() image?: string;
}
