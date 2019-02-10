import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VenturesComponent } from './ventures/ventures.component';
import { AboutComponent } from './ventures/about/about.component';
import { InvestingComponent } from './ventures/investing/investing.component';
import { D10xComponent } from './ventures/d10x/d10x.component';
import { InnovationComponent } from './ventures/innovation/innovation.component';
import { StudioComponent } from './ventures/studio/studio.component';
import { AtAGlanceComponent } from './ventures/investing/at-a-glance/at-a-glance.component';
import { CupidComponent } from './ventures/studio/cupid/cupid.component';
import { PortfolioComponent } from './ventures/investing/portfolio/portfolio.component';
import { TeamComponent } from './ventures/team/team.component';
import { PerspectivesComponent } from './ventures/perspectives/perspectives.component';
import { ContactComponent } from './ventures/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    VenturesComponent,
    AboutComponent,
    InvestingComponent,
    D10xComponent,
    InnovationComponent,
    StudioComponent,
    AtAGlanceComponent,
    CupidComponent,
    PortfolioComponent,
    TeamComponent,
    PerspectivesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
