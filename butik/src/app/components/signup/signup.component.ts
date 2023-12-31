import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  error(error: any) {
    throw new Error('Method not implemented.');
  }

  public credentials = {
    name: '',
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, public router: Router) {
  }

  ngOnInit() {
  }

  create() {
    this.authService.createOrUpdate(this.credentials).subscribe(
      (result) => {
        if (result) {
          this.router.navigate(['/']);
        } else {
          console.log('Operation failed or returned false');
          
        }
      },
      (error) => {
       
        console.error('An error occurred:', error);
        
      }
    );
  }
}

