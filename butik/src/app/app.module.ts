import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { butikComponent } from './components/butik/butik.component';
import { butikItemComponent } from './components/butik-item/butik-item.component';
import { butikItemTextComponent } from './components/butik-item-text/butik-item-text.component';
import { butikItemImageComponent } from './components/butik-item-image/butik-item-image.component';
import { butikItemDetailsComponent } from './components/butik-item-details/butik-item-details.component';
import {HttpClientModule} from "@angular/common/http";
import {DataService} from "./services/data.service";
import { SummaryPipe } from './pipes/summary.pipe';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import {FormsModule} from "@angular/forms";
import { butikHomeComponent } from './components/butik-home/butik-home.component';
import { FilterTextPipe } from './pipes/filter-text.pipe';
import { TextFormatDirective } from './directives/text-format.directive';
import { HomeComponent } from './components/home/home.component';
import {AuthService} from "./services/auth.service";
import {HTTP_INTERCEPTORS} from
    '@angular/common/http';
import {AuthInterceptor} from './services/auth.interceptor';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditComponent } from './components/edit/edit.component';
import { CheckNumbersPipe } from './pipes/check-numbers.pipe';
import { PriceColorDirective } from './directives/price-color.directive';





@NgModule({
  declarations: [
    AppComponent,
    butikComponent,
    butikItemComponent,
    butikItemTextComponent,
    butikItemImageComponent,
    butikItemDetailsComponent,
    SummaryPipe,
    SearchBarComponent,
    butikHomeComponent,
    FilterTextPipe,
    TextFormatDirective,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    AddPostComponent,
    EditComponent,
    CheckNumbersPipe,
    PriceColorDirective,





  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DataService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
