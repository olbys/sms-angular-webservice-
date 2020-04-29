export class Env {

  BASE_URL = 'http://localhost:8080';
  RELATIVE_PATH = new Map<string, string>(
    [
      ["login", "/rest/auth/login"],
      ["addPersonne", "/rest/personne/add"],
      ["addUtilisateur", "/rest/personne/utilisateur/add"]
    ]
  )

  getWebservice( uri : string) : string {
    return this.BASE_URL.concat(this.RELATIVE_PATH.get(uri));
  }


}
