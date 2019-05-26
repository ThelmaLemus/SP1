import { Component, OnInit } from '@angular/core';
import { AuthService } from "../servicios/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-registro1',
  templateUrl: './registro1.page.html',
  styleUrls: ['./registro1.page.scss'],
})
export class Registro1Page implements OnInit {

	correo: string;
	contrasena: string;

  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  onSubmitLogin()
  {
  	this.authService.login(this.correo, this.contrasena).then( res => {
  		this.router.navigate(['/home']);
  	}).catch(err => alert('los datos son incorrectos o no existe el usuario'))
  }

}
