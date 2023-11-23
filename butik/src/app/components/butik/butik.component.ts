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

  constructor(private service: DataService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe(response => {
      this.items$ = response;
      this.applyFilter();
    });
  }

  applyFilter() {
    if (this.items$ && this.filterText) {
      this.filteredItems$ = this.items$.filter(
        (item: any) =>
          item.title.toLowerCase().includes(this.filterText.toLowerCase())
      );
    } else {
      this.filteredItems$ = this.items$;
    }
  }

  
  onFilterTextChange() {
    this.applyFilter();
  }
}
