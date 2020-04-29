import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Personne} from "../../../model/personne";

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css'],
})
export class UtilisateurComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  utilisatreur: Personne;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  hide : boolean;
  public minCalendar : Date ; public maxCalendar : Date ;


  constructor(private _formBuilder: FormBuilder ) {
    this.utilisatreur = new Personne();
    this.minCalendar =  new Date( new Date().getFullYear() - 150, 0, 1);
    this.maxCalendar =  new Date( new Date().getFullYear() - 1, 12, 31);
    this.hide = true;
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.email],
      login: [''],
      password: [''],
      confirm_password: [''],
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });

    this.secondFormGroup = this._formBuilder.group({
      cellphone: ['', Validators.required],
      address: this._formBuilder.group({
        // form group imbriqué
        street: ['', Validators.required],
        city: ['', Validators.required],
        postalcode: ['', Validators.required],
        country: ['', Validators.required],
      }),
    });
  }

}
