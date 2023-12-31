import { TestBed, ComponentFixture } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['authenticate']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy },
      ],
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('should create the LoginComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to "/" on successful login', () => {
    // Given
    authServiceSpy.authenticate.and.returnValue(of(true));

    // When
    component.signIn();

    // Then
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/']);
  });

  

  it('should reset credentials on successful login', () => {
    // Given
    authServiceSpy.authenticate.and.returnValue(of(true));
    component.credentials = { login: 'test', password: 'password' };

    // When
    component.signIn();

    // Then
    expect(component.credentials).toEqual({ login: '', password: '' });
  });

  it('should handle invalid login credentials', () => {
    // Given
    authServiceSpy.authenticate.and.returnValue(of(false));

    // When
    component.signIn();

    // Then
    expect(component.logged).toBe(false);
    expect(component.errorMessage).toBe('Błędne dane logowania');
  });

  it('should handle login error and set error message', () => {
    // Given
    authServiceSpy.authenticate.and.returnValue(throwError('Test error'));

    // When
    component.signIn();

    // Then
    expect(component.errorMessage).toBe('Wystąpił błąd podczas logowania');
  });
  
  

 
  

  it('should reset credentials on successful login', () => {
    // Given
    authServiceSpy.authenticate.and.returnValue(of(true));
    component.credentials = { login: 'test', password: 'password' };
    
    // When
    component.signIn();
    
    // Then
    expect(component.credentials).toEqual({ login: '', password: '' });
  });
  

  it('should handle invalid login credentials', () => {
    // Given
    authServiceSpy.authenticate.and.returnValue(of(false));
    
    // When
    component.signIn();
    
    // Then
    expect(component.logged).toBe(false);
    expect(component.errorMessage).toBe('Błędne dane logowania');
  });

  it('should handle login error and set error message', () => {
    // Given
    authServiceSpy.authenticate.and.returnValue(throwError('Test error'));
    
    // When
    component.signIn();
    
    // Then
    expect(component.errorMessage).toBe('Wystąpił błąd podczas logowania');
  });

  it('should not navigate on unsuccessful login', () => {
    // Given
    authServiceSpy.authenticate.and.returnValue(of(false));
  
    // When
    component.signIn();
  
    // Then
    expect(routerSpy.navigate).not.toHaveBeenCalled();
  });

  it('should set logged flag to false on unsuccessful login', () => {
    // Given
    authServiceSpy.authenticate.and.returnValue(of(false));
  
    // When
    component.signIn();
  
    // Then
    expect(component.logged).toBe(false);
  });

  it('should reset error message on successful login', () => {
    // Given
    authServiceSpy.authenticate.and.returnValue(of(true));
    component.errorMessage = 'Some error message';
  
    // When
    component.signIn();
  
    // Then
    expect(component.errorMessage).toBe('');
  });

  it('should call router.navigate only once on sign-in', () => {
    // Given
    authServiceSpy.authenticate.and.returnValue(of(true));
  
    // When
    component.signIn();
  
    // Then
    expect(routerSpy.navigate).toHaveBeenCalledTimes(1);
  });

  it('should call authenticate service with correct login credentials', () => {
    // Given
    const testCredentials = { login: 'test', password: 'password' };
    authServiceSpy.authenticate.and.returnValue(of(true));
  
    // When
    component.credentials = testCredentials;
    component.signIn();
  
    // Then
    expect(authServiceSpy.authenticate).toHaveBeenCalledWith(testCredentials);
  });
  
  
  
});