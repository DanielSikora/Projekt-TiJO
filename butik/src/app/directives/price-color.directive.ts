import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[priceColor]'
})
export class PriceColorDirective implements OnChanges {
  @Input('priceColor') price!: number | undefined;

  constructor(private elementRef: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['price'] && !changes['price'].isFirstChange()) {
      this.applyPriceColor();
    }
  }

  private applyPriceColor() {
    if (this.price === undefined) {
      // Obsługa braku ceny, na przykład ustawienie domyślnego koloru
      this.elementRef.nativeElement.style.color = 'black';
    } else if (this.price < 10000) {
      this.elementRef.nativeElement.style.color = 'green';
    } else if (this.price >= 10000 && this.price < 20000) {
      this.elementRef.nativeElement.style.color = 'orange';
    } else {
      this.elementRef.nativeElement.style.color = 'red';
    }
  }
}
