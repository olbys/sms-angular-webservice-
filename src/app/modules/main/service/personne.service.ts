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
  personnesSubject = new Subject<Personne []>();

  constructor(private httpClient: HttpClient,
              private environment: Env,
              private toastrService: ToastrService,
  ) {
  }

  public notify(sujet: Personne) {
    this.serviceRequest.next(sujet);
  }

  private emitPersonnes(personnes: Personne []) {
    this.personnesSubject.next(personnes.slice());
  }

  public addPersonne(dataPersonne: Personne) {
    let personne: Personne;
    this.httpClient.post<Utilisateur>(
      this.environment.getWebservice('addUtilisateur'),
      dataPersonne).subscribe(
      (value) => {
        personne = value;
        this.toastrService.success("Success", "Connexion effectué", {
          positionClass: 'toast-top-right'
        })
        this.notify(personne);
      },
      (error) => {
        this.toastrService.error("Error", "Sauvegarde échoué", {
          positionClass: 'toast-top-right'
        })
      }
    )
  }

  public getPersonnes() {
    this.httpClient.get<Personne[]>(
      this.environment.getWebservice("getPersonnes")
    ).subscribe(
      (values  ) => {
        let personnes: Personne [];
        personnes =  values.slice();
        this.emitPersonnes(personnes);
      },
      (error ) =>{
        console.log(error);
        this.toastrService.error("Error", "Sauvegarde échoué", {
          positionClass: 'toast-top-right'
        })
      }
    )

  }
}
