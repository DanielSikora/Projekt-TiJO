import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { of } from 'rxjs';
import { DataService } from '../../services/data.service';
import { butikItemDetailsComponent } from './butik-item-details.component';
import { AppModule } from 'src/app/app.module';

describe('ButikItemDetailsComponent', () => {
  let component: butikItemDetailsComponent;
  let fixture: ComponentFixture<butikItemDetailsComponent>;
  let mockDataService: jasmine.SpyObj<DataService>;
  let mockActivatedRoute: Partial<ActivatedRoute>;
  let mockAuthService: jasmine.SpyObj<AuthService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(() => {
    mockDataService = jasmine.createSpyObj('DataService', ['getById', 'deletePost']);
    mockActivatedRoute = { paramMap: of({ get: () => '1' }) } as unknown as Partial<ActivatedRoute>;
    mockAuthService = jasmine.createSpyObj('AuthService', ['isLoggedIn']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [butikItemDetailsComponent],
      providers: [
        { provide: DataService, useValue: mockDataService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: AuthService, useValue: mockAuthService },
        { provide: Router, useValue: mockRouter },
      ],
    });

    fixture = TestBed.createComponent(butikItemDetailsComponent);
    component = fixture.componentInstance;
  });

  it('Given user is logged in, when ngOnInit is called, then item details should be fetched', () => {
    // Given
    const mockResponse = {
      image: 'mockImage',
      title: 'mockTitle',
      text: 'mockText',
      rozmiar: 42,
      price: 99,
      id: '1',
    };
    mockDataService.getById.and.returnValue(of(mockResponse));

    // When
    component.ngOnInit();

    // Then
    expect(component.image).toEqual(mockResponse.image);
    expect(component.title).toEqual(mockResponse.title);
    expect(component.text).toEqual(mockResponse.text);
    expect(component.rozmiar).toEqual(mockResponse.rozmiar);
    expect(component.price).toEqual(mockResponse.price);
    expect(component.id).toEqual(mockResponse.id);
  });

  it('Given user is logged in, when deletePost is called, then post should be deleted and navigate to /butik', () => {
    // Given
    mockAuthService.isLoggedIn.and.returnValue(true);
    mockDataService.deletePost.and.returnValue(of(true));

    // When
    component.deletePost();

    // Then
    expect(mockDataService.deletePost).toHaveBeenCalledWith(component.id);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/butik']);
  });

  it('Given user is not logged in, when deletePost is called, then post should not be deleted and should not navigate', () => {
    // Given
    mockAuthService.isLoggedIn.and.returnValue(false);

    // When
    component.deletePost();

    // Then
    expect(mockDataService.deletePost).not.toHaveBeenCalled();
    expect(mockRouter.navigate).not.toHaveBeenCalled();
  });

  it('Given user is logged in, when updatePost is called, then navigate to /edit/:id', () => {
    // Given
    mockAuthService.isLoggedIn.and.returnValue(true);

    // When
    component.updatePost();

    // Then
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/edit', component.id]);
  });

  it('Given user is not logged in, when updatePost is called, then should not navigate', () => {
    // Given
    mockAuthService.isLoggedIn.and.returnValue(false);

    // When
    component.updatePost();

    // Then
    expect(mockRouter.navigate).not.toHaveBeenCalled();
  });

  it('Given user is logged in, when buyPost is called, then navigate to /butik/buyForm/:id', () => {
    // Given
    mockAuthService.isLoggedIn.and.returnValue(true);

    // When
    component.buyPost();

    // Then
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/butik/buyForm', component.id]);
  });

  it('Given user is not logged in, when buyPost is called, then should not navigate', () => {
    // Given
    mockAuthService.isLoggedIn.and.returnValue(false);

    // When
    component.buyPost();

    // Then
    expect(mockRouter.navigate).not.toHaveBeenCalled();
  });

  
});
