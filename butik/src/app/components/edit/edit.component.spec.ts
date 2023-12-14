import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditComponent } from './edit.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { of } from 'rxjs';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
  let authService: jasmine.SpyObj<AuthService>;
  let service: jasmine.SpyObj<DataService>;
  let router: jasmine.SpyObj<Router>;
  let activatedRoute: any; 

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['isLoggedIn']);
    const serviceSpy = jasmine.createSpyObj('DataService', ['getById', 'createPost']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [EditComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: AuthService, useValue: authServiceSpy },
        { provide: DataService, useValue: serviceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    service = TestBed.inject(DataService) as jasmine.SpyObj<DataService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    activatedRoute = TestBed.inject(ActivatedRoute); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update post and navigate to "/butik" when AuthService is logged in', () => {
    // given
    authService.isLoggedIn.and.returnValue(true);
    service.createPost.and.returnValue(of('success'));

    // when
    component.updatePost();

    // then
    expect(service.createPost).toHaveBeenCalledWith(component.credentials);
    expect(router.navigate).toHaveBeenCalledWith(['/butik']);
  });

  it('should not update post or navigate when AuthService is not logged in', () => {
    // given
    authService.isLoggedIn.and.returnValue(false);

    // when
    component.updatePost();

    // then
    expect(service.createPost).not.toHaveBeenCalled();
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('should not update post or navigate when user is not logged in', () => {
    // given
    authService.isLoggedIn.and.returnValue(false);
  
    // when
    component.updatePost();
  
    // then
    expect(service.createPost).not.toHaveBeenCalled();
    expect(router.navigate).not.toHaveBeenCalled();
  });

  
});
