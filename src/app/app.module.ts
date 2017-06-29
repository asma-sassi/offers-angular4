import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { PrefaceComponent } from './preface/preface.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { ResetpwdComponent } from './resetpwd/resetpwd.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    DetailsComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    PrefaceComponent,
    AdvantagesComponent,
    ContactComponent,
    LoginComponent,
    AboutComponent,
    SignupComponent,
    ResetpwdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
      },
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: 'details/:id',
        component: DetailsComponent
      },
      {
        path: 'advantage',
        component: AdvantagesComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'about',
        component: AboutComponent
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
        path: 'resetpassword',
        component: ResetpwdComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
