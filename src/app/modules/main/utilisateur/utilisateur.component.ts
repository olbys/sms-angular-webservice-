import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Personne} from "../../../model/personne";
import {Utilisateur} from "../../../model/utilisateur";
import {PersonneService} from "../service/personne.service";
import {Subscription} from "rxjs";
import {MatStepper} from "@angular/material/stepper";

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css'],
})
export class UtilisateurComponent implements OnInit {

  @ViewChild('stepper', { static: true }) stepper: MatStepper ;
  private servicenotifs : boolean = false ;
  private notifSubscription : Subscription;

  firstFormGroup: FormGroup;
  utilisateur: Personne;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  hide: boolean;
  public minCalendar: Date;
  public maxCalendar: Date;


  constructor(private _formBuilder: FormBuilder, private _personneService : PersonneService) {
    this.utilisateur = new Personne();
    this.minCalendar = new Date(new Date().getFullYear() - 150, 0, 1);
    this.maxCalendar = new Date(new Date().getFullYear() - 1, 12, 31);
    this.hide = true;
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.email],
      birthdate: [{value: '', disabled: true}, Validators.required],
      cellphone: ['', Validators.required],
      login: [''],
      password: [''],
      confirm_password: [''],
      adress: this._formBuilder.group({
        // form group imbriqué
        street: ['', Validators.required],
        city: ['', Validators.required],
        postalcode: ['', Validators.required],
        country: ['', Validators.required],
      }),

      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });

    this.notifSubscription = this._personneService.serviceRequest.subscribe(
      ( val) =>{
        this.stepper.reset();
      }
    )
  }

  reset(){
    this.stepper.reset();
  }

  async handleClickFirstForm() {
   this.utilisateur = this.hydrateUtilisateur(this.firstFormGroup);
    if(this.utilisateur != null){
     this._personneService.addPersonne(this.utilisateur);
   }

  }




  /**
   *
   * @param formGroup
   */
  public hydrateUtilisateur(formGroup: FormGroup): Personne {

    let utilisateurToHydrate = new Personne();
    utilisateurToHydrate.name = this.firstFormGroup.get('name').value;
    utilisateurToHydrate.lastName = this.firstFormGroup.get('lastname').value;
    utilisateurToHydrate.birthDate = this.firstFormGroup.get('birthdate').value;
    utilisateurToHydrate.cellPhone = this.firstFormGroup.get('cellphone').value;
    utilisateurToHydrate.email = this.firstFormGroup.get('email').value;
    utilisateurToHydrate.login = this.firstFormGroup.get('login').value;
    utilisateurToHydrate.password = this.firstFormGroup.get('password').value;
    utilisateurToHydrate.adress = this.firstFormGroup.get('adress').value;
    return utilisateurToHydrate;
  }


}
