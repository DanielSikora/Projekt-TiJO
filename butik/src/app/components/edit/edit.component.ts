import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  public credentials = {
    id: '',
    image: '',
    text: '',
    title: '',
    rozmiar: 0,
    price: 0
  };


  constructor(private service: DataService, private route: ActivatedRoute, private authService: AuthService, public router: Router) {
  }

  ngOnInit() {
    let id: string = '';
    this.route.params.subscribe(params => {
      id = params['id'];

      });

    this.service.getById(id).subscribe((res: any) => {
      this.credentials = res;
      console.log(this.credentials);


    });

  }


  updatePost() {
    if(this.authService.isLoggedIn()) {
      this.service.createPost(this.credentials).subscribe((result) => {
        return result;
      });
      this.router.navigate(['/butik']);
    }
  }
}
