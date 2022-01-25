import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { AlertConfig } from 'ngx-bootstrap/alert';
import { Injectable, Inject } from '@angular/core';

import { LoginService } from '../../../service/login.service'
import { ADMIN_ROLE, OWNER_ROLE, CUSTOM_ROLE } from '../../../service/login.service'
import { WINDOW } from '../../../app.module';
import { LocalStorageService, LOCAL_CART_LIST } from '../../../service/local-storage.service'
import { WarehouseService } from '../../../service/warehouse.service';

export function getAlertConfig(): AlertConfig {
    return Object.assign(new AlertConfig(), { type: 'success' });
}

@Component({
    selector: 'app-dashboard',
    templateUrl: 'warehouse.component.html',
    styleUrls: [
        '../../../app.component.css',
    ]
})

@Injectable()
export class WarehouseComponent implements OnInit {

    constructor(@Inject(WINDOW) private window: Window, private router: Router,
    private service: WarehouseService, private localStorage: LocalStorageService) { }

    ItemList: any[]
    Page: number
    TotalPage: number
    CurRole: number
    PageArray: number[]

    CartList: any[]

    ngOnInit() {
        this.CartList = []
        // this.CartList = this.localStorage.GetCartListItems()
        this.loadPageData(1);
    }

    // onUserLinkClick(data: string) {
    //     console.log("On user link clicked");
    //     console.log("Quyen debug: data: ", data);
    //     this.localStorage.SetStorageDashboardUser(data);
    //     this.router.navigateByUrl('clinic-dashboard')
    // }

    // public get UserDataList(): any[] {
    //     return this.UserList;
    // }

    onCreateButtonClick() {
        console.log("On create button clicked");
        this.router.navigateByUrl('warehouse/wh-add-item');
    }

    onItemUpdateClick(item: any) {
        console.log("On onItemUpdateClick clicked");
        console.log("Quyen debug: item: ", item);
        this.localStorage.SetUpdateItem(item)
        this.router.navigateByUrl('warehouse/wh-update-item');
    }

    onPageClick(page: number) {
        this.loadPageData(page);
    }

    private loadPageData(page: number) {
        var localToken = this.localStorage.GetStorageToken()
        var localUser = this.localStorage.GetStorageUser()
        var localRole = this.localStorage.GetStorageRole()
        this.CurRole = localRole
        this.PageArray = []

        if(page < 1) page = 1;
        if(page > this.TotalPage) {page = this.TotalPage}

        console.log("Quyen debug: token: ", localToken)
        console.log("Quyen debug: user: ", localUser)
        console.log("Quyen debug: role: ", localRole)

        if (localToken != undefined) {
            if (localToken.length != 0) {
                var host = "http://" + this.window.location.hostname;
                this.service.GetWarehouseItems(page, localToken, "", host).then((res) => {
                    console.log("Quyen debug: resposne data for get userdata: ", res);
                    this.ItemList = res.data;
                    this.Page = parseInt(res.page.toString());
                    this.TotalPage = parseInt(res.total_page.toString());
                    var size = this.TotalPage;

                    console.log("Quyen debug this.ItemList:= ", this.ItemList);
                    console.log("Quyen debug this.Page:= ", this.Page);
                    console.log("Quyen debug this.TotalPage:= ", this.TotalPage);
                    if (size > 5) {
                        size = 5
                    }
                    var start = this.Page - 4;
                    if (start < 1) start = 1;
                    var end = start + size;
                    if (end > this.TotalPage) end = this.TotalPage
                    for (var i = start; i < (end + 1); i++) {
                        this.PageArray.push(i);
                    }
                    console.log("Quyen debug this.PageArray:= ", this.PageArray);

                }).catch(err => {
                    // TODO: handler error page
                    // this.router.navigateByUrl('login');
                });
            }
        }
    }
}
    