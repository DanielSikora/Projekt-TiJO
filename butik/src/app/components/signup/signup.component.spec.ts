import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignupComponent } from './signup.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';



describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let authService: jasmine.SpyObj<AuthService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['createOrUpdate']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [SignupComponent],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;  
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should call createOrUpdate on AuthService and navigate to "/" on successful creation', () => {
    // given
    const successResponse = { };
    authService.createOrUpdate.and.returnValue(of(successResponse));

    // when
    component.create();

    // then
    expect(authService.createOrUpdate).toHaveBeenCalledWith(component.credentials);
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });

  it('should navigate to "/" only on successful user creation', () => {
    // given
    const successResponse = {};
    authService.createOrUpdate.and.returnValue(of(successResponse));
  
    // when
    component.create();
  
    // then
    expect(authService.createOrUpdate).toHaveBeenCalledWith(component.credentials);
    expect(router.navigate).toHaveBeenCalledWith(['/']); // should navigate on success
    expect(router.navigate).toHaveBeenCalledTimes(1); // should navigate exactly once
  });
  it('should navigate to "/" on successful user creation', () => {
  // given
  const successResponse = true; // Załóżmy, że odpowiedź z serwisu AuthService jest prawidłowa i powoduje nawigację
  
  authService.createOrUpdate.and.returnValue(of(successResponse));
  
  // when
  component.create();
  
  // then
  expect(authService.createOrUpdate).toHaveBeenCalledWith(component.credentials);
  expect(router.navigate).toHaveBeenCalledWith(['/']); // powinno nawigować w przypadku sukcesu
});
  
  it('should call authService.createOrUpdate and not navigate on unsuccessful creation', () => {
    // given
    const errorResponse = {};
    authService.createOrUpdate.and.returnValue(throwError(errorResponse));
    
    // when
    component.create();
    
    // then
    expect(authService.createOrUpdate).toHaveBeenCalledWith(component.credentials);
    expect(router.navigate).not.toHaveBeenCalled(); // should not navigate on error
  });
  
 

 
  

  
  
});
