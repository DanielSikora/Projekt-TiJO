import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuyFormComponent } from './buy-form.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from "../../services/data.service";
import { of } from 'rxjs';

describe('BuyFormComponent', () => {
  let component: BuyFormComponent;
  let fixture: ComponentFixture<BuyFormComponent>;
  let authService: jasmine.SpyObj<AuthService>;
  let service: jasmine.SpyObj<DataService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['isLoggedIn']);
    const serviceSpy = jasmine.createSpyObj('DataService', ['getById', 'deletePost']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [BuyFormComponent],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: (key: string) => 'mockId' } } } },
        { provide: AuthService, useValue: authServiceSpy },
        { provide: DataService, useValue: serviceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BuyFormComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    service = TestBed.inject(DataService) as jasmine.SpyObj<DataService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it('should not delete post or set purchase message when user is not logged in', () => {
    // given
    authService.isLoggedIn.and.returnValue(false);
  
    // when
    component.onSubmit();
  
    // then
    expect(service.deletePost).not.toHaveBeenCalled();
    expect(component.purchaseMessage).toEqual('');
  });

  it('should delete post when user is logged in and submitting the form', () => {
    // given
    authService.isLoggedIn.and.returnValue(true);
    const deletePostResponse = '';
    service.deletePost.and.returnValue(of(deletePostResponse));
  
    // when
    component.id = 'mockId';
    component.onSubmit();
  
    // then
    expect(service.deletePost).toHaveBeenCalledWith('mockId');
    expect(component.purchaseMessage).toEqual('Buciki zamówione!');
  });

  

  

  

  it('should delete post when user is logged in and submitting the form', () => {
    authService.isLoggedIn.and.returnValue(true);
    service.deletePost.and.returnValue(of(''));

    component.id = 'mockId';
    component.onSubmit();

    expect(service.deletePost).toHaveBeenCalledWith('mockId');
    expect(component.purchaseMessage).toEqual('Buciki zamówione!');
  });
});
