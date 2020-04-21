import {Adress} from "./adress";

export class Personne {
  id: number;
  name: string
  cellphone: string;
  email: string;
  avatar: string;
  birthdate: Date;
  createdAt: Date;
  adress: Adress;
  login: string;
  password: string;
  salt: string;


  constructor(id?: number, name?: string, cellphone?: string, email?: string,
              avatar?: string, birthdate?: Date, createdAt?: Date, adress?: Adress,
              login?: string, password?: string, salt?: string) {
    this.id = id || null;
    this.name = name  || "";
    this.cellphone = cellphone  || "";
    this.email = email  || "";
    this.avatar = avatar || "";
    this.birthdate = birthdate || null;
    this.createdAt = createdAt || null;
    this.adress = adress || null;
    this.login = login || "";
    this.password = password || "";
    this.salt = salt || "";
  }
}
