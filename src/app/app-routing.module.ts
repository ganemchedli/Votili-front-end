import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { VoteComponent } from './pages/vote/vote.component';
import { NewelectionComponent } from './pages/newelection/newelection.component';
import { HomeComponent } from './pages/home/home.component';
import { PiechartComponent } from './pages/result/piechart/piechart.component';
import { StatAgeComponent } from './pages/result/stat-age/stat-age.component';
import { StatGenreComponent } from './pages/result/stat-genre/stat-genre.component';
import { StatRegionComponent } from './pages/result/stat-region/stat-region.component';
import { StatbacComponent } from './pages/result/statbac/statbac.component';
import { TestComponent } from './test/test.component';
import { SidebarComponent } from './pages/result/sidebar/sidebar.component';
import { AllelectionvotantComponent } from './allelectionvotant/allelectionvotant.component';
import { AllelectionComponent } from './pages/allelection/allelection.component';
import { ServiceComponent } from './pages/service/service.component';
import { CodeVoteComponent } from './pages/code-vote/code-vote.component';
import { StatCodeComponent } from './pages/stat-code/stat-code.component';
import { ElectiondetailsComponent } from './pages/electiondetails/electiondetails.component';
import { RealtimeresultComponent } from './pages/realtimeresult/realtimeresult.component';
import { FormNewVotantComponent } from './pages/form-new-votant/form-new-votant.component';
import { FormNewCondidatComponent } from './pages/form-new-condidat/form-new-condidat.component';
import { MailInvitationComponent } from './pages/mail-invitation/mail-invitation.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
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
  {path:'email', component:MailInvitationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
