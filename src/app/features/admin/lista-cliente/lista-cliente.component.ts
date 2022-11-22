import { Router } from '@angular/router';
import { AdminService } from './../../../_services/admin/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {


  constructor(private service: AdminService, private router: Router ) { }

  ngOnInit(): void {
    // this.carregaCliente();
  }

  // carregaCliente() {
  //  this.service.getMecanicos().subscribe({
  //     next: data => {
  //       this.cliente = data;
  //       this.isLoading = false;
  //     }
  //   })
  // }

  // redirectCadastroMecancico() {
  //   this.router.navigateByUrl('/admin/novo-mecanico');
  // }

}
