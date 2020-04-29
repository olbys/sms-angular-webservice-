import {Personne} from "./personne";

export class Utilisateur extends Personne{
   id: number;
   login: string;
   password: string;

  constructor(id?: number | null, login?: string | null, password?: string | null) {
   super();
   super.id = id;
   super.login = login;
   super.password = password;
  }


}
