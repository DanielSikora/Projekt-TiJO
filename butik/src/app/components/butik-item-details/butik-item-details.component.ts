import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'butik-item-details',
  templateUrl: './butik-item-details.component.html',
  styleUrls: ['./butik-item-details.component.css']
})
export class butikItemDetailsComponent implements OnInit {

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
  deletePost() {
    if(this.authService.isLoggedIn()) {
      this.service.deletePost(this.id).subscribe((result) => {
        return result;
      });
      this.router.navigate(['/butik']);
    }
  }

  updatePost() {
    if(this.authService.isLoggedIn()){
      this.router.navigate(['/edit', this.id])
    }
  }
}
