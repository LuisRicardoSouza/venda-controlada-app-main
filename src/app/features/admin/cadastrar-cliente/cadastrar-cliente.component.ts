import { AdminService } from './../../../_services/admin/admin.service';
import { Cliente } from './../../../models/pessoa/cliente.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from './../../../core/_alert/alert.service';
import { TokenStorageService } from './../../../_services/token/token-storage.service';


@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})

export class CadastrarClienteComponent implements OnInit {

 constructor(private formBuilder: FormBuilder,  private tokenService: TokenStorageService,
      protected alertService: AlertService, private router: Router, private adminService: AdminService) { }

      form: FormGroup

  ngOnInit(): void {

      this.form = this.formBuilder.group ({

      nome:'',
      rua:'',
      numero:'',
      bairro:'',
      cidade:'',

      })

  }
cadastrarCliente(){

const cliente: Cliente = this.form.value;
debugger;
// this.adminService.cadastrarCliente(cliente);

}

// cadastrarCliente vai chamar o metodo cadastrarCliente no _service que ira chamar a API


}
