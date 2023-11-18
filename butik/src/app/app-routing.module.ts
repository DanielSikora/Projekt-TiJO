import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {butikComponent} from "./components/butik/butik.component";
import {butikItemDetailsComponent} from "./components/butik-item-details/butik-item-details.component";
import {butikHomeComponent} from "./components/butik-home/butik-home.component";
import {HomeComponent} from "./components/home/home.component";
import {AuthGuard} from "./services/auth.guard";
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import {AddPostComponent} from "./components/add-post/add-post.component";
import { EditComponent } from './components/edit/edit.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'butik',
    component: butikHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'butik/detail/:id',
    component: butikItemDetailsComponent
  },
  {
    path: 'addPost',
    component: AddPostComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'edit/:id',
    component: EditComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    declarations: [

    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
