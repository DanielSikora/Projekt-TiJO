import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-buy-form',
  templateUrl: './buy-form.component.html',
  styleUrls: ['./buy-form.component.css']
})
export class BuyFormComponent {
  isFormValid: boolean = false;

  public title: string = '';
  public image: string = '';
  public text: string = '';
  public rozmiar: number = 0;
  public price: number = 0;
  public id: string = '';

  constructor(private service: DataService, private route: ActivatedRoute, private authService: AuthService, public router: Router) {
  }

  ngOnInit() {
    let id: string = '';
    this.route.paramMap
      .subscribe((params: any) => {
        id = params.get('id');
      });

    this.service.getById(id).subscribe((res: any) => {
      this.image = res['image'];
      this.title = res['title'];
      this.text = res['text'];
      this.rozmiar = res['rozmiar'];
      this.price = res['price'];
      this.id = res['id'];

    });

  }

  checkFormValidity() {
    const formInputs = document.querySelectorAll<HTMLInputElement>('#myForm input[required]');
    this.isFormValid = true;

    formInputs.forEach((input) => {
      if (!input.value.trim()) {
        this.isFormValid = false;
      }
    });
  }

  onSubmit() {
    if(this.authService.isLoggedIn()) {
      this.service.deletePost(this.id).subscribe((result) => {
        return result;
      });
      this.router.navigate(['/butik']);
    }
    console.log('Form submitted!');
  }
}
