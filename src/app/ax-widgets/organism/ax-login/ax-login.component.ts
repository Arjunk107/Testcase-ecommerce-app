import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginserviceService } from 'src/app/core/service/loginservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ax-login',
  templateUrl: './ax-login.component.html',
  styleUrls: ['./ax-login.component.scss']
})
export class AxLoginComponent implements OnInit {
  loginForm!: FormGroup;
  userlogindata: any[] = [];
  userid!: number;
  constructor(private formbuilder: FormBuilder, private logindata: LoginserviceService, private router: Router) {
    logindata.getallusers().subscribe((res: any) => {
      this.userlogindata = res;
    })
  }
  flag: number = 0;
  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }
  onSubmit(loginform: any) {
    if (this.loginForm.invalid) {
      Swal.fire("Email or password not matching");
    }
    else {
      for (let i = 0; i < this.userlogindata.length; i++) {
        if (loginform.value.email === this.userlogindata[i].email && loginform.value.password === this.userlogindata[i].password) {
          this.flag = 1;
          this.userid = this.userlogindata[i].id;
        }
      }
      if (this.flag == 1) {
        Swal.fire("Successful");

        this.router.navigate(['/home/' + this.userid]);
        this.logindata.login();
      }
      else {
        Swal.fire("Email or password not matching");
        this.logindata.logout();
      }
    }

  }


}
