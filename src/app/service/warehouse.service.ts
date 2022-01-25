import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { cilSearch } from '@coreui/icons';


@Injectable({
    providedIn: 'root'
  })
  
export class WarehouseService {
    constructor(private http: HttpClient) { }

    public async GetWarehouseItems(page: number, token: string, search: string, host: string): Promise<any> {
        console.log("Quyen debug page: ", page);
        var url = host + ':30000/warehouse/item/list/' + page
        url += "?token=" + token
        url += "&search=" + search
        var res = await this.http.get(url).toPromise();
        console.log("Server response: " + JSON.stringify(res, null, 2));

        return res;
    }

    public async CreateItem(data: any, host: string): Promise<any> {
        
        var res = await this.http.post(host + ':30000/warehouse/item/create', data).toPromise();
        console.log("Server response: " + JSON.stringify(res, null, 2));

        return res;
    }

    public async UpdateItem(data: any, host: string): Promise<any> {
        
        var res = await this.http.put(host + ':30000/warehouse/item/update', data).toPromise();
        console.log("Server response: " + JSON.stringify(res, null, 2));

        return res;
    }
}
  