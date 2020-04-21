export class Adress {

  id : number;
  street:string;
  city:string;
  postalcode:number;
  country :string;


  constructor(id?: number, street?: string, city?: string, postalcode?: number, country?: string) {
    this.id = id || null ;
    this.street = street || '';
    this.city = city || '';
    this.postalcode = postalcode || null;
    this.country = country || '';
  }
}
