import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {MediaComponent} from "./media/media.component";
import {ReachUsComponent} from "./reach-us/reach-us.component";
import {HomeComponent} from "./home/home.component";
import {VisionValueComponent} from "./vision-value/vision-value.component";
import {ManagementTeamComponent} from "./management-team/management-team.component";
import {PartnersComponent} from "./partners/partners.component";
import {FinancialServicesComponent} from "./financial-services/financial-services.component";
import {BusinessServicesComponent} from "./business-services/business-services.component";
import {ECommerceComponent} from "./e-commerce/e-commerce.component";
import {SupplyChainFinanceComponent} from "./supply-chain-finance/supply-chain-finance.component";

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'news', component: MediaComponent },
  { path: 'reach-us', component: ReachUsComponent},
  { path: '', component: HomeComponent},
  { path: 'vision-value', component: VisionValueComponent},
  { path: 'management-team', component: ManagementTeamComponent},
  { path: 'partners', component: PartnersComponent},
  { path: 'financial-services', component: FinancialServicesComponent},
  { path: 'business-services', component: BusinessServicesComponent},
  { path: 'e-commerce', component: ECommerceComponent},
  { path: 'supply-chain-finance', component: SupplyChainFinanceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
