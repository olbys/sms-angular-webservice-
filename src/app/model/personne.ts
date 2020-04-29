import {Adress} from "./adress";

export class Personne {
  id: number;
  name: string;
  lastName : string;
  cellPhone: string;
  email: string;
  avatar: string;
  birthDate: Date;
  createdAt: Date;
  adress: Adress;
  login: string;
  password: string;
  salt: string;


  constructor(id?: number, name?: string,lastname? : string, cellphone?: string, email?: string,
              avatar?: string, birthdate?: Date, createdAt?: Date, adress?: Adress,
              login?: string, password?: string, salt?: string) {
    this.id = id || null;
    this.name = name  || "";
    this.lastName = lastname  || "";
    this.cellPhone = cellphone  || "";
    this.email = email  || "";
    this.avatar = avatar || "";
    this.birthDate = birthdate || null;
    this.createdAt = createdAt || null;
    this.adress = adress || null;
    this.login = login || "";
    this.password = password || "";
    this.salt = salt || "";
  }
}
