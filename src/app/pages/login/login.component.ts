import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService,private router: Router) {}

  login(): void {
    this.authService.login(this.email, this.password).then(() => {
      this.router.navigate(['/admin']);  
    }).catch(error => {
      console.error('Login error', error);
    });
  }
}
