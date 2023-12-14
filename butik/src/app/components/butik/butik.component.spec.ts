import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { DataService } from '../../services/data.service';
import { ButikComponent } from './butik.component';

describe('ButikComponent', () => {
  let component: ButikComponent;
  let fixture: ComponentFixture<ButikComponent>;
  let mockDataService: jasmine.SpyObj<DataService>;

  beforeEach(() => {
    mockDataService = jasmine.createSpyObj('DataService', ['getAll']);

    TestBed.configureTestingModule({
      declarations: [ButikComponent],
      providers: [{ provide: DataService, useValue: mockDataService }],
    });

    fixture = TestBed.createComponent(ButikComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAll method on ngOnInit', () => {
    mockDataService.getAll.and.returnValue(of([]));

    component.ngOnInit();

    expect(mockDataService.getAll).toHaveBeenCalled();
    expect(component.items$).toEqual([]);
  });

  it('should apply filters correctly', () => {
    const mockResponse = [{ title: 'Shoe 1', price: 50, rozmiar: 42 }];
    mockDataService.getAll.and.returnValue(of(mockResponse));

    component.getAll();

    component.filterText = 'Shoe';
    component.minPrice = 30;
    component.maxPrice = 60;
    component.shoeSize = 42;
    component.applyFilter();

    expect(component.filteredItems$).toEqual(mockResponse);
  });

  it('should clear filters correctly', () => {
    const mockResponse = [{ title: 'Shoe 1', price: 50, rozmiar: 42 }];
    mockDataService.getAll.and.returnValue(of(mockResponse));

    component.getAll();

    component.filterText = 'Shoe';
    component.minPrice = 30;
    component.maxPrice = 60;
    component.shoeSize = 42;
    component.clearFilters();

    expect(component.filterText).toEqual('');
    expect(component.minPrice).toBeUndefined();
    expect(component.maxPrice).toBeUndefined();
    expect(component.shoeSize).toBeUndefined();
    expect(component.filteredItems$).toEqual(mockResponse);
  });
  it('should apply filter on filterText change', () => {
    const mockResponse = [
      { title: 'Shoe 1', price: 50, rozmiar: 42 },
      { title: 'Shoe 2', price: 60, rozmiar: 39 },
    ];
    mockDataService.getAll.and.returnValue(of(mockResponse));

    component.getAll();

    component.filterText = 'Shoe 1';
    component.onFilterTextChange();

    expect(component.filteredItems$).toEqual([mockResponse[0]]);

    component.filterText = 'Shoe 2';
    component.onFilterTextChange();

    expect(component.filteredItems$).toEqual([mockResponse[1]]);
  });
  
});