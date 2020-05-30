import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { StockviewerComponent } from './modules/stockviewer/stockviewer.component';
import { AccountComponent } from './modules/account/account.component';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: HomeComponent
  }, {
    path: 'stockviewer',
    component: StockviewerComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },  
  ]

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
