import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  private todo : FormGroup;
  name = new FormControl('')
  progressID = 0

  profileForm = this.formBuilder.group({
    firstName: ['',  Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    birthdate: ['', Validators.required],
    cellphone: ['', Validators.required],
    photo: ['', Validators.required]
      
    })
  

  constructor(private router: Router, public loadingController: LoadingController, private formBuilder: FormBuilder, private accountService: AccountService) { }

  ngOnInit() {

  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Wait..',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

     this.router.navigateByUrl('/tabs')
  }

  onSubmitStep(){

   const formValue = this.profileForm.value 
   const newUser = new User(
     formValue['firstName'],
     formValue ['lastName'],
     formValue['email'],
     formValue['password'],
     formValue['birthdate'],
     formValue['cellphone'],
     formValue['photo'],
   )
   this.accountService.addUser(newUser)
    }

  onSubmit(){
    console.log(this.profileForm.value);
  }

}
