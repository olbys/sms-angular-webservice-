import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Env} from "../../../env/env";
import {ToastrService} from "ngx-toastr";
import {Personne} from "../../../model/personne";
import {Utilisateur} from "../../../model/utilisateur";
import {Observable, Subject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  serviceRequest = new Subject<Personne>();

  constructor(private httpClient: HttpClient,
              private environment: Env,
              private toastrService: ToastrService,
  ) {
  }

  public notify(sujet : Personne){
    this.serviceRequest.next(sujet);
  }

  public addPersonne(dataPersonne: Personne): Personne {
    let personne: Personne;
    // this.httpClient.post("dd", dataPersonne).toPromise();
    this.httpClient.post<Utilisateur>(
      this.environment.getWebservice('addUtilisateur'),
      dataPersonne).subscribe(
      (value) => {
        personne = value;
        this.toastrService.success("Success", "Connexion effectué", {
          positionClass: 'toast-top-full-width'
        })
        this.notify(personne);
      },
      (error) => {
        this.toastrService.error("Error", "Connexion échoué", {
          positionClass: 'toast-top-full-width'
        })
      }
    )
    return personne;
  }
}
