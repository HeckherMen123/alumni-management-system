import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private router: Router){
  }
  gotoHome(){
    console.log('helloworld')
    this.router.navigateByUrl('homepage')
  }
}
