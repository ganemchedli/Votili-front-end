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
import { StatGenreComponent} from './pages/result/stat-genre/stat-genre.component';
import {StatAgeComponent} from './pages/result/stat-age/stat-age.component';
import {StatRegionComponent }from './pages/result/stat-region/stat-region.component';
import { StatbacComponent } from './pages/result/statbac/statbac.component';
import { NavbaradminComponent } from './layout/components/navbaradmin/navbaradmin.component';
import { AddcandidateComponent } from './pages/addcandidate/addcandidate.component';
import { RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { SidebarComponent } from './pages/result/sidebar/sidebar.component';
import { AutorizevotersComponent } from './pages/autorizevoters/autorizevoters.component';
import { AllelectionvotantComponent } from './allelectionvotant/allelectionvotant.component';
import { AllelectionComponent } from './pages/allelection/allelection.component';
import { NavbaruserComponent } from './layout/components/navbaruser/navbaruser.component';
import { ServiceComponent } from './pages/service/service.component';
import { CodeVoteComponent } from './pages/code-vote/code-vote.component';
import { StatCodeComponent } from './pages/stat-code/stat-code.component';
import { ElectiondetailsComponent } from './pages/electiondetails/electiondetails.component';
import { RealtimeresultComponent } from './pages/realtimeresult/realtimeresult.component';
import { FormNewVotantComponent } from './pages/form-new-votant/form-new-votant.component';
import { FormNewCondidatComponent } from './pages/form-new-condidat/form-new-condidat.component';

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
    ResultComponent,
    StatGenreComponent,
    StatRegionComponent,
    StatAgeComponent,
    StatbacComponent,
    NavbaradminComponent,
    AddcandidateComponent,
    AutorizevotersComponent,
   AllelectionComponent,
   NavbaruserComponent,
   ServiceComponent,
   CodeVoteComponent,
   StatCodeComponent,
   ElectiondetailsComponent,
   RealtimeresultComponent,
   FormNewVotantComponent,
   FormNewCondidatComponent,
 

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgChartsModule,
    
    RouterModule.forRoot([
      {path:'inscrit', component:SignupComponent},
  {path:'login', component:LoginComponent},
  {path:'voter', component:VoteComponent},
  {path:'election', component:NewelectionComponent},
  {path:'home', component:HomeComponent},
  {path:'result', component:TestComponent},
  {path:'stat1', component:PiechartComponent},
  {path:'statage', component:StatAgeComponent},
  {path:'statgenre', component:StatGenreComponent},
  {path:'statregion', component:StatRegionComponent},
  {path:'statbac', component:StatbacComponent},
  {path:'stat2', component:SidebarComponent},
  {path:'allelections', component:AllelectionComponent},
  {path:'sercvice', component:ServiceComponent},
  {path:'intermediaire', component:CodeVoteComponent},
  {path:'stat-code', component:StatCodeComponent},
  {path:'electiondetails', component:ElectiondetailsComponent},
  {path:'realtimeresult', component:RealtimeresultComponent},
  {path:'formcin', component:FormNewVotantComponent},
  {path:'formcondidat', component:FormNewCondidatComponent},
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
