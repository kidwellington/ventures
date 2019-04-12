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
import { BioComponent } from './ventures/bio/bio.component';
import { ContentfulService } from './services/contentful.service';
import { MenuComponent } from './ventures/ui/menu/menu.component';
import { FooterComponent } from './ventures/ui/footer/footer.component';
import { EditComponent } from './ventures/ui/edit/edit.component';
import { HeroComponent } from './ventures/ui/hero/hero.component';
import { FeatureComponent } from './ventures/ui/feature/feature.component';
import { PartnerComponent } from './ventures/ui/partner/partner.component';
import { PerspectiveComponent } from './ventures/ui/perspective/perspective.component';
import { InnovativeComponent } from './ventures/ui/innovative/innovative.component';

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
    ContactComponent,
    BioComponent,
    MenuComponent,
    FooterComponent,
    EditComponent,
    HeroComponent,
    FeatureComponent,
    PartnerComponent,
    PerspectiveComponent,
    InnovativeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
