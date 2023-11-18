import {Component, ViewChild} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {DataService} from "../../services/data.service";



@Component({
  selector: 'add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})

export class AddPostComponent {
  public credentials = {


    image: '',
    text: '',
    title: '',
    rozmiar: '',
    price: '',
  };


  constructor(private authService: AuthService,private dataService: DataService, public router: Router) {
  }

  ngOnInit() {
  }

  addPost() {
    if(this.authService.isLoggedIn()) {
      this.dataService.createPost(this.credentials).subscribe((result) => {
        return result;
      });
      this.router.navigate(['/']);
    }
  }


}
