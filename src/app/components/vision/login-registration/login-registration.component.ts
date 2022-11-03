import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-registration',
  templateUrl: './login-registration.component.html',
  styleUrls: ['./login-registration.component.css']
})
export class LoginRegistrationComponent implements OnInit {

  mode: 'LOGIN' | 'REGISTRATION' = 'REGISTRATION';

  loginRegistrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dialogRef: MatDialogRef<LoginRegistrationComponent>) {
    this.loginRegistrationForm = this.formBuilder.group({
      username: [''],
      fullName: [''],
      password: [''],
      email:['']
    });
  }

  ngOnInit(): void {
  }

  onCancel(){
    this.dialogRef.close();
  }

  onSubmit(){
    this.dialogRef.close({form: this.loginRegistrationForm})
  }
}
