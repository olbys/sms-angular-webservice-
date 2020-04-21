import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Utilisateur} from "../model/utilisateur";
import {Env} from "../env/env";
import {Subject} from "rxjs";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  utilisateur: Utilisateur;

  constructor(private httpclient: HttpClient,
              private environment: Env,
              private toastrService : ToastrService,
  ) {
    this.utilisateur =  new Utilisateur();
  }



  login(utilisateur_: Utilisateur | null): Utilisateur {
    this.utilisateur = utilisateur_
    this.httpclient.post<Utilisateur>(
      this.environment.getWebservice('login'),
      this.utilisateur).subscribe(
      (value) => {
        this.utilisateur = value;
        this.toastrService.success("Success", "Connexion effectué", {
          positionClass: 'toast-top-full-width'
        })
        console.log(this.utilisateur);
      },
      (error) => {
        this.toastrService.error("Error", "Connexion échoué", {
          positionClass: 'toast-top-full-width'
        })
      }
    )
    return this.utilisateur;
  }

}
