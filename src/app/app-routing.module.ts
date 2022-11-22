import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { CadastrarClienteComponent } from './features/admin/cadastrar-cliente/cadastrar-cliente.component';
import { CadastrarVendaComponent } from './features/admin/cadastrar-venda/cadastrar-venda.component';
import { ListaClienteComponent } from './features/admin/lista-cliente/lista-cliente.component';
import { ListaVendasComponent } from './features/admin/lista-vendas/lista-vendas.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin/novo-cliente', component: CadastrarClienteComponent},
  { path: 'admin/cliente', component: ListaClienteComponent},
  { path: 'admin/nova-venda', component: CadastrarVendaComponent},
  { path: 'admin/venda', component: ListaVendasComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
