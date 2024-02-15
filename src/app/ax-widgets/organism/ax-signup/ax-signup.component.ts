import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from 'src/app/core/service/loginservice.service';
import { SignupService } from 'src/app/core/service/signup.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ax-signup',
  templateUrl: './ax-signup.component.html',
  styleUrls: ['./ax-signup.component.scss']
})
export class AxSignupComponent implements OnInit {
  signupForm!: FormGroup;
  userlogdata: any[] = [];
  lastid!: number;
  idcount!: number;
  constructor(private formbuilder: FormBuilder, private logdata: LoginserviceService, private signupdata: SignupService, private router: Router) {
    logdata.getallusers().subscribe((res: any) => {
      this.userlogdata = res;
      this.lastid = this.userlogdata.length
    })
  }


  ngOnInit(): void {
    this.signupForm = this.formbuilder.group({
      id: [''],
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
    })

  }

  signupSubmit(signupdata: any) {
    if (this.signupForm.invalid) {
      Swal.fire("Invalid !!");
    }
    else {
      this.idcount = this.lastid + 1
      signupdata.value.id = this.idcount
      this.signupdata.adduser(signupdata.value).subscribe((res) => {
        Swal.fire("Successful");
        signupdata.reset();
        this.router.navigate([''])
      })
    }

  }
}
