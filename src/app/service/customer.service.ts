import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { cilSearch } from '@coreui/icons';


@Injectable({
    providedIn: 'root'
  })
  
export class CustomerService {
    constructor(private http: HttpClient) { }

    public async GetCustomersList(page: number, token: string, search: string, host: string): Promise<any> {
        console.log("Quyen debug page: ", page);
        var url = host + ':30000/customer/list/' + page
        url += "?token=" + token
        url += "&search=" + search
        var res = await this.http.get(url).toPromise();
        console.log("Server response: " + JSON.stringify(res, null, 2));

        return res;
    }
}
  