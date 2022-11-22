import { AlertComponent } from './core/_alert/alert.component';
import { AlertModule } from './core/_alert/alert.module';
import { authInterceptorProviders } from './core/_helpers/auth.interceptor';
import { LoaderModule } from './core/loader/loader.module';
import { PageContentComponent } from './core/page-content/page-content.component';

import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextMaskModule } from 'angular2-text-mask';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';
import { NgBrazil } from 'ng-brazil';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

import { CadastrarClienteComponent } from './features/admin/cadastrar-cliente/cadastrar-cliente.component';
import { CadastrarVendaComponent } from './features/admin/cadastrar-venda/cadastrar-venda.component';
import { ListaClienteComponent } from './features/admin/lista-cliente/lista-cliente.component';
import { ListaVendasComponent } from './features/admin/lista-vendas/lista-vendas.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    PageContentComponent,
    CadastrarClienteComponent,
    ListaClienteComponent,
    CadastrarVendaComponent,
    ListaVendasComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    LoaderModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    TextMaskModule,
    NgBrazil,
    AlertModule,
    MatTabsModule
  ],
  providers: [
    authInterceptorProviders,
    MatDatepickerModule,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
