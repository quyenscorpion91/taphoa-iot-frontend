import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

export const ADMIN_ROLE = 1
export const OWNER_ROLE = 2
export const CUSTOM_ROLE = 4

@Injectable({
  providedIn: 'root'
})

export class LoginService {
    constructor(private http: HttpClient) {}

  public async SubmidLogin(data: any, host: string): Promise<any> {
    var sha256 = require('js-sha256').sha256;
    // var password = data.passwd
    // var hashpw = sha256(password)
    let loginData = { user: data.username, passwd: data.passwd };

    var res = await this.http.post(host + ':30000/auth', loginData).toPromise();
    console.log("Server response: " + JSON.stringify(res, null, 2));

    return res;
  }

  // public async GetRoleByToken(token: string, host: string): Promise<any> {
  //   var res = await this.http.get(host + ':30000/role/' + token).toPromise();
  //   console.log("Server response: " + JSON.stringify(res, null, 2));

  //   return res;
  // }

  // public async GetUserByCreator(page: number, creator: string, token: string, host: string): Promise<any> {
  //   var res = await this.http.get(host + ':30000/user/creator/' + page + "?creator=" + creator + "&token=" + token).toPromise();
  //   console.log("Server response: " + JSON.stringify(res, null, 2));

  //   return res;
  // }
}
