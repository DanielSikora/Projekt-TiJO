import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public credentials = {
    login: '',
    password: ''
  };

  public logged?: boolean;
  public logout?: boolean;
  public errorMessage: string = ''; 

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  signIn() {
    return this.authService.authenticate(this.credentials).subscribe(
      (result) => {
        if (!result) {
          this.logged = false;
          this.errorMessage = 'Błędne dane logowania';
          alert('Błędne logowanie'); 
        } else {
          this.logout = false;
          this.credentials = {
            login: '',
            password: ''
          };
          this.router.navigate(['/']);
        }
      },
      (error) => {
        console.error('Błąd logowania:', error);
        this.errorMessage = 'Wystąpił błąd podczas logowania';
        alert('Wystąpił błąd podczas logowania'); 
      }
    );
  }
  
}
