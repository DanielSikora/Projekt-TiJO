import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddPostComponent } from '../components/add-post/add-post.component';
import { AuthService } from './auth.service';
import { DataService } from './data.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('AddPostComponent', () => {
    let component: AddPostComponent;
    let fixture: ComponentFixture<AddPostComponent>;
    let authService: AuthService;
    let dataService: DataService;
    let router: Router;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [AddPostComponent],
        imports: [FormsModule, HttpClientTestingModule], 
        providers: [AuthService, DataService]
      }).compileComponents();
    });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    dataService = TestBed.inject(DataService);
    router = TestBed.inject(Router);
    spyOn(authService, 'isLoggedIn').and.returnValue(true);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call dataService.createPost and navigate when addPost is called', () => {
    const credentials = {
      image: '',
      text: '',
      title: '',
      rozmiar: '',
      price: '',
    };
    const createPostSpy = spyOn(dataService, 'createPost').and.returnValue(of({ }));
    const navigateSpy = spyOn(router, 'navigate');

    component.credentials = credentials;
    component.addPost();

    expect(authService.isLoggedIn).toHaveBeenCalled();
    expect(createPostSpy).toHaveBeenCalledWith(credentials);
    expect(navigateSpy).toHaveBeenCalledWith(['/']);
  });

  // Add more tests as needed to cover different scenarios and edge cases

});
