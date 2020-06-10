import { StockbodyComponent } from 'src/app/modules/stockviewer/stockbody/stockbody.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { StockviewerComponent } from './modules/stockviewer/stockviewer.component';
import { AccountComponent } from './modules/account/account.component';
import { FullwidthComponent } from './layouts/fullwidth/fullwidth.component';
import { LoginComponent } from './modules/login/login.component';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: HomeComponent
  }, 
  {
    path: 'stockviewer',
    component: StockviewerComponent,
    children: [{
      path: '',
      component: StockbodyComponent,
    }]
  },
  {
    path: 'account',
    component: AccountComponent
  }]
},
 
  {
    path: '',
    component: FullwidthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
    ]  
  
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
