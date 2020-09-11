import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
readonly BaseURI = 'http://localhost:63262/api';

  formModel = this.fb.group({
    UserName : [''],
    Email : ['', [Validators.required, Validators.email]],
    FullName : [''],
    Passwords : this.fb.group({
        Password : ['', [Validators.required, Validators.minLength(4)]],
        ConfirmPassword: ['', Validators.required]
    }, {validator : this.comparePasswords })

  });
  
  comparePasswords( fb: FormGroup){
    let confirmPswrdCtrl = fb.get('ConfirmPassword');

    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors){
      if (fb.get('Password').value !== confirmPswrdCtrl.value){
        confirmPswrdCtrl.setErrors({passwordMismatch: true});
      }
      else{
        confirmPswrdCtrl.setErrors(null);
     }
    }
  }

  register(){
    var body = {
      User: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      Fullname: this.formModel.value.FullName,
      Password: this.formModel.value.Passwords.Password
    };
    return this.http.post(this.BaseURI + '/Register', body);
  }

  login(formData) {
    return this.http.post(this.BaseURI + '/Register/Login', formData);
  }

  getUserProfile() {
    return this.http.get(this.BaseURI + '/UserProfile');
  }
}
