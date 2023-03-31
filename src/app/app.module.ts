import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NewelectionComponent } from './pages/newelection/newelection.component';
import { VoteComponent } from './pages/vote/vote.component';
import { ListelectionsComponent } from './pages/listelections/listelections.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './layout/components/navbar/navbar.component';
import { ResultComponent } from './pages/result/result.component';
import { PiechartComponent } from './pages/result/piechart/piechart.component';
import { NgChartsModule } from 'ng2-charts';
import { NavbaradminComponent } from './layout/components/navbaradmin/navbaradmin.component';
import { AutorizevotersComponent } from './pages/autorizevoters/autorizevoters.component';
import { AddcandidateComponent } from './pages/addcandidate/addcandidate.component';
import { NavbaruserComponent } from './layout/components/navbaruser/navbaruser.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NewelectionComponent,
    VoteComponent,
    ListelectionsComponent,
    NavbarComponent,
    ResultComponent,
    PiechartComponent,
    NavbaradminComponent,
    AutorizevotersComponent,
    AddcandidateComponent,
    NavbaruserComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
