import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { cilSearch } from '@coreui/icons';


@Injectable({
    providedIn: 'root'
  })
  
export class ReceiptService {
    constructor(private http: HttpClient) { }

    public async GetReceiptList(page: number, status: number, token: string, search: string, host: string): Promise<any> {
        console.log("Quyen debug page: ", page);
        var url = host + ':30000/receipt/list/' + page
        url += "?token=" + token
        url += "&status=" + status
        url += "&search=" + search
        var res = await this.http.get(url).toPromise();
        console.log("Server response: " + JSON.stringify(res, null, 2));

        return res;
    }

    public async CreateRecipe(data: any, host: string): Promise<any> {
        
        var res = await this.http.post(host + ':30000/receipt/add', data).toPromise();
        console.log("Server response: " + JSON.stringify(res, null, 2));

        return res;
    }

    public async UpdateRecipe(data: any, host: string): Promise<any> {
        
        var res = await this.http.put(host + ':30000/receipt/update', data).toPromise();
        console.log("Server response: " + JSON.stringify(res, null, 2));

        return res;
    }

    public async DeleteReceipt(id: number, token: string, host: string): Promise<any> {
        console.log("Quyen debug delete id: ", id);
        var url = host + ':30000/receipt/delete/' + id.toString()
        url += "?token=" + token
        var res = await this.http.delete(url).toPromise();
        console.log("Server response: " + JSON.stringify(res, null, 2));

        return res;
    }

    public async GetReceiptReport(status: number, token: string, from: string, to: string,  host: string): Promise<any> {
        var url = host + ':30000/receipt/report'
        url += "?token=" + token
        url += "&status=" + status
        url += "&from=" + from
        url += "&to=" + to
        var res = await this.http.get(url).toPromise();
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
  