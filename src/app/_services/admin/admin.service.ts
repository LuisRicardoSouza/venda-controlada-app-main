import { Cliente } from './../../models/pessoa/cliente.model';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Vendas } from 'src/app/models/pessoa/vendas.model';



const ADMIN_API = environment.API + 'admin';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }



  cadastrarCliente( cliente: Cliente): Observable<any> {

    // debugger;
    return this.http.post(ADMIN_API + '/clientes/cadastrar', {

        cliente

    }, httpOptions);
  }

  cadastrarVendas( vendas: Vendas): Observable<any> {


    return this.http.post(ADMIN_API + '/vendas/cadastrar', {

        vendas

    }, httpOptions);
  }

  getServicos(): Observable<any> {
    return this.http.post(ADMIN_API + '/servicos/listar', {
    }, httpOptions);
  }

}
