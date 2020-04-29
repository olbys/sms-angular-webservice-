import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Utilisateur} from "../../../model/utilisateur";
import {AuthService} from "../service/auth.service";
import {Personne} from "../../../model/personne";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;
  utilisateur : Utilisateur;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authservice :AuthService
  ) {
    this.utilisateur = authservice.utilisateur;
  }

  async ngOnInit() {
    this.loginInvalid = false;
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  async onSubmit() {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      try {
        this.utilisateur.login =  this.form.get('username').value;
        this.utilisateur.password = this.form.get('password').value;
        console.log(" =========== before http service ===========");
        console.log(this.utilisateur);
        this.authservice.login(this.utilisateur)
        console.log(" =========== after http service ===========");
        this.router.navigate(["/dashboard"])
        console.log(this.utilisateur);



      } catch (err) {
        this.loginInvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }


}
