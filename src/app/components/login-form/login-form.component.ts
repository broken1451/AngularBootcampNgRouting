import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

{}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public form!: FormGroup;  
  @Output() LoginAction: EventEmitter<{}> = new EventEmitter<{}>()

  constructor(private fb:FormBuilder, private authService: AuthService) { }

  get email(){
    return this.form.get('email');
  }

  get password(){
    return this.form.get('password');
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email:['', Validators.compose([Validators.required,Validators.email])],
      password: ['', Validators.required]
    });
  }

  // submit en el formulario login
  submitLogin(){
    if (this.form.valid) {
      console.log(this.form.value);
      this.LoginAction.emit(this.form.value);
      // this.form.reset();
    }
  }

}
