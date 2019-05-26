import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	constructor(private router: Router) {}

	go(){
		this.router.navigate(['ajustes']);
	}

	go_otro(){
		this.router.navigateByUrl('/registro1');
	}

}
