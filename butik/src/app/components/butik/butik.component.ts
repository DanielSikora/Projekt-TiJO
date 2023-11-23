import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'butik',
  templateUrl: './butik.component.html',
  styleUrls: ['./butik.component.css']
})
export class butikComponent implements OnInit {
  @Input() filterText: string = '';
  public items$: any;
  public filteredItems$: any;
  public minPrice: number | undefined;
  public maxPrice: number | undefined;
  public shoeSize: number | undefined;

  constructor(private service: DataService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe(response => {
      this.filterText = '';
      this.items$ = response;
      this.applyFilter();
    });
  }

  applyFilter() {
    if (this.items$) {
      let filteredItems = this.items$;
  
      const isAnyFilterUsed =
        this.filterText !== '' || this.minPrice !== undefined || this.maxPrice !== undefined || this.shoeSize !== undefined;
  
      if (isAnyFilterUsed) {
        filteredItems = this.items$.filter((item: any) => {
          const titleMatch = item.title.toLowerCase().includes(this.filterText.toLowerCase());
          const priceMatch = (this.minPrice === undefined || item.price >= this.minPrice) &&
                             (this.maxPrice === undefined || item.price <= this.maxPrice);
          const sizeMatch = (this.shoeSize === undefined || item.rozmiar === this.shoeSize);
          return titleMatch && priceMatch && sizeMatch;
        });
      }
  
      this.filteredItems$ = filteredItems;
    } else {
      this.filteredItems$ = this.items$;
    }
  }
  
  onFilterTextChange() {
    this.applyFilter();
  }
  
  clearFilters() {
    this.filterText = '';
    this.minPrice = undefined;
    this.maxPrice = undefined;
    this.shoeSize = undefined;
    this.applyFilter();
  }
}
