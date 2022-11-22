import { AdminService } from './../../../_services/admin/admin.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Vendas } from './../../../models/pessoa/vendas.model';
import { AlertService } from './../../../core/_alert/alert.service';
import { TokenStorageService } from './../../../_services/token/token-storage.service';




@Component({
  selector: 'app-cadastrar-venda',
  templateUrl: './cadastrar-venda.component.html',
  styleUrls: ['./cadastrar-venda.component.css']
})


export class CadastrarVendaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private adminService: AdminService,
    protected alertService: AlertService, private tokenService: TokenStorageService) { }

     form: FormGroup

  ngOnInit(): void {

      this.form= this.formBuilder.group({

      nome:'',
      produto:'',
      pagamento:'',


      })

  }
  cadastrarVendas(){

          const vendas: Vendas = this.form.value;
          this.adminService.cadastrarVendas(vendas);

  }

}
