import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public email!: string;
  public password!: string;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    const token = sessionStorage.getItem('token')
    if (token) {
      this.router.navigate(['/home'])
    }
  }

  loginUser(value: any) {
    console.log({value})
    let {email, password}= value
    try {
      this.authService.login(email,password).subscribe(res => {
        console.log({ res })
        if (res.token) {
          sessionStorage.setItem('token', res.token);
          this.router.navigate(['/dashboard'])
        }
      }, (err) => console.log(err), () => console.log('Peticion finalizada'))
    } catch (error) {
      console.log(error);
    }
  }

}
