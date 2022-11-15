import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Angular material modules start
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
// Angular material modules end

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { VisionValueComponent } from './vision-value/vision-value.component';
import { MediaComponent } from './media/media.component';
import { ReachUsComponent } from './reach-us/reach-us.component';
import { ManagementTeamComponent } from './management-team/management-team.component';
import { PartnersComponent } from './partners/partners.component';
import { FinancialServicesComponent } from './financial-services/financial-services.component';
import { BusinessServicesComponent } from './business-services/business-services.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { SupplyChainFinanceComponent } from './supply-chain-finance/supply-chain-finance.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {YouTubePlayerModule} from '@angular/youtube-player';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    VisionValueComponent,
    MediaComponent,
    ReachUsComponent,
    ManagementTeamComponent,
    PartnersComponent,
    FinancialServicesComponent,
    BusinessServicesComponent,
    ECommerceComponent,
    SupplyChainFinanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatExpansionModule,
    YouTubePlayerModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
