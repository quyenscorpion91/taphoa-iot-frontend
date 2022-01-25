import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

export interface UserInterface {
    user: string;
    passwd: string;
    token: string;
    name: string;
    addr: string;
    phone: string;
    email: string;
    idcard: string;
    role: number;
}
  

@Injectable({
    providedIn: 'root'
})

export class RegisterService {
    constructor(private http: HttpClient) {}

    public async CreateNewUser(accRole: number, token: string, data: any, host: string): Promise<any> {
        // var sha256 = require('js-sha256').sha256;
        // var password = data.passwd
        // var hashpw = sha256(password)
        var role = parseInt(accRole.toString(), 10)
        let createData: UserInterface = {
            user: data.username,
            passwd: data.passwd,
            token: token,
            name: data.name,
            addr: data.addr,
            phone: data.phone,
            email: data.email,
            role: role,
            idcard: data.idcard
        }

        console.log("Quyen debug: create package", createData);

        var res = await this.http.post(host + ':30000/user/create', createData).toPromise();
        console.log("Server response: " + JSON.stringify(res, null, 2));

        return res;
    }
}
