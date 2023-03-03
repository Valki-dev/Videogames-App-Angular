import { Component } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse, HttpHeaderResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) { }

  registerForm: FormGroup = this.formBuilder.group({
    userName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
    password2: ['', [Validators.required, Validators.minLength(4)]],
    phoneNumber: ['', [Validators.required]]
  })

  // userName: string = "";
  // email: string = "";
  // password: string = "";
  // password2: string = "";
  // phoneNumber: string = "";
  showAlert: boolean = false;
  message: string = "";

  get userName() { return this.registerForm.get('userName')};
  get email() { return this.registerForm.get('email') };
  get password() { return this.registerForm.get('password') };
  get password2() { return this.registerForm.get('password2') };
  get phoneNumber() { return this.registerForm.get('phoneNumber') };

  register() {
    const { userName, email, password, password2, phoneNumber} = this.registerForm.value

    if((userName.trim() != "") && (email.trim() != "") && (password.trim() != "") && (phoneNumber.trim() != "")) {
      if (password === password2) {
        const newUser: User = {
          id: "",
          userName: userName,
          email: email,
          password: password,
          phoneNumber: phoneNumber,
          subscriptionDate: new Date(),
          isAdmin: false
        }
  
        console.log(newUser);
  
        this.userService.createUser(newUser).subscribe(response => {
          if(HttpErrorResponse) {
            console.log(HttpErrorResponse);
  
            this.showAlert = true;
            // console.log(response);
            alert('El usuario ya está registrado en el sistema!')
          }
  
          if (response.status === "OK") {
            console.log(response);
            this.router.navigate(['/user/login'])
          }
  
        })
      } else {
        this.showAlert = true;
        this.message = "Las contraseñas son distintas"
      }
    }

    

  }
}
