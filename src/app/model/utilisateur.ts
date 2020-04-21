export class Utilisateur {
   id: number;
   login: string;
   password: string;

  constructor(id?: number | null, login?: string | null, password?: string | null) {
    this.id = 0 || id;
    this.login = login || '';
    this.password = password || '';
  }


}
