import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddPostComponent } from './add-post.component';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('AddPostComponent', () => {
  let component: AddPostComponent;
  let fixture: ComponentFixture<AddPostComponent>;
  let authService: jasmine.SpyObj<AuthService>;
  let dataService: jasmine.SpyObj<DataService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['isLoggedIn']);
    const dataServiceSpy = jasmine.createSpyObj('DataService', ['createPost']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [ AddPostComponent ],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: DataService, useValue: dataServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPostComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    dataService = TestBed.inject(DataService) as jasmine.SpyObj<DataService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when user is logged in', () => {
    beforeEach(() => {
      authService.isLoggedIn.and.returnValue(true);
      const createPostResponse = of('some result');
      dataService.createPost.and.returnValue(createPostResponse);
    });

    it('should call createPost and navigate to "/"', () => {
      // when
      component.addPost();

      // then
      expect(dataService.createPost).toHaveBeenCalledWith(component.credentials);
      expect(router.navigate).toHaveBeenCalledWith(['/']);
    });
  });

  describe('when user is not logged in', () => {
    beforeEach(() => {
      authService.isLoggedIn.and.returnValue(false);
    });

    it('should not call createPost or navigate', () => {
      // when
      component.addPost();

      // then
      expect(dataService.createPost).not.toHaveBeenCalled();
      expect(router.navigate).not.toHaveBeenCalled();
    });
  });
});
