import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './home/product/product.component';
import { DetailsComponent } from './home/details/details.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './home/slider/slider.component';
import { PrefaceComponent } from './home/preface/preface.component';
import { AdvantagesComponent } from './home/advantages/advantages.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { ResetpwdComponent } from './resetpwd/resetpwd.component';
import { ShowVisibleDirective } from './show-visible.directive';
import { AdvDetailsComponent } from './home/adv-details/adv-details.component';

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
    ResetpwdComponent,
    ShowVisibleDirective,
    AdvDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([

      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
        children: [
                    {
                      path: 'product',
                      component: ProductComponent
                    },
                    {
                      path: 'advantage',
                      component: AdvantagesComponent,
                    }
                  ]
      },
      {
        path: 'details/:id',
        component: DetailsComponent,
      },
      {
        path: 'advDetails/:id',
        component: AdvDetailsComponent,
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
