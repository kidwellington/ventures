import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './ventures/about/about.component';
import { ContactComponent } from './ventures/contact/contact.component';
import { D10xComponent } from './ventures/d10x/d10x.component';
import { InnovationComponent } from './ventures/innovation/innovation.component';
import { InvestingComponent } from './ventures/investing/investing.component';
import { PerspectivesComponent } from './ventures/perspectives/perspectives.component';
import { StudioComponent } from './ventures/studio/studio.component';
import { TeamComponent } from './ventures/team/team.component';
import { AtAGlanceComponent } from './ventures/investing/at-a-glance/at-a-glance.component';
import { PortfolioComponent } from './ventures/investing/portfolio/portfolio.component';
import { CupidComponent } from './ventures/studio/cupid/cupid.component';
import { VenturesComponent } from './ventures/ventures.component';
import { BioComponent } from './ventures/bio/bio.component';
import { LoginComponent } from './ventures/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'ventures', pathMatch: 'full' },
  { path: 'ventures',  component: VenturesComponent },
  { path: 'ventures/about-citi-ventures',  component: AboutComponent },
  { path: 'ventures/bio/:slug', component: BioComponent },
  { path: 'ventures/contact-us',  component: ContactComponent },
  { path: 'ventures/d10x',  component: D10xComponent },
  { path: 'ventures/innovation-network-and-emerging-technology',  component: InnovationComponent },
  { path: 'ventures/venture-investing',  component: InvestingComponent },
  { path: 'ventures/perspectives',  component: PerspectivesComponent },
  { path: 'ventures/studio',  component: StudioComponent },
  { path: 'ventures/team',  component: TeamComponent },
  { path: 'ventures/venture-investing/at-a-glance',  component: AtAGlanceComponent },
  { path: 'ventures/venture-investing/portfolio',  component: PortfolioComponent },
  { path: 'ventures/studio/cupid',  component: CupidComponent },
  { path: 'ventures/login',  component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
