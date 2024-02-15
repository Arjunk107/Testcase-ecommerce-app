import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UpdateuserService } from 'src/app/core/service/updateuser.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ax-profile',
  templateUrl: './ax-profile.component.html',
  styleUrls: ['./ax-profile.component.scss']
})
export class AxProfileComponent implements OnInit {
  updateForm!: FormGroup;
  namval = '';
  emailval = '';
  phnumval = '';
  passval = '';
  userid!: number;
  id!: number;
  userdetails = {
    id: '',
    name: '',
    email: '',
    phonenumber: '',
    password: ''
  };
  constructor(private formbuilder: FormBuilder, private userdatas: UpdateuserService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.userdatas.userdata(this.id).subscribe((res: any) => {
      this.userdetails = res;
      console.log(this.userdetails.name);
      this.namval = this.userdetails.name;
      this.emailval = this.userdetails.email;
      this.phnumval = this.userdetails.phonenumber;
      this.passval = this.userdetails.password;
      this.formInit(this.namval, this.emailval, this.phnumval, this.passval);
    })


  }

  formInit(namesd: any, emailsd: any, phnumsd: any, passsd: any) {
    this.updateForm = this.formbuilder.group({
      name: [namesd || '', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: [emailsd || '', [Validators.required, Validators.email]],
      phonenumber: [phnumsd || '', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(10)]],
      password: [passsd || '']
    })
  }

  onUpdatesubmit() {
    this.userdatas.updatedata(this.id, this.updateForm.value).subscribe((res: any) => {
      Swal.fire("successful");
    })
  }
}
