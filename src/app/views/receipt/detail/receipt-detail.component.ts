import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { AlertConfig } from 'ngx-bootstrap/alert';
import { Injectable, Inject } from '@angular/core';
import { LoginService } from '../../../service/login.service'
import { ADMIN_ROLE, OWNER_ROLE, CUSTOM_ROLE } from '../../../service/login.service'
import { WINDOW } from '../../../app.module';
import { LocalStorageService } from '../../../service/local-storage.service'
import { WarehouseService } from '../../../service/warehouse.service';
import { ReceiptService } from '../../../service/receipt.service';
import { style } from '@angular/animations';

export function getAlertConfig(): AlertConfig {
    return Object.assign(new AlertConfig(), { type: 'success' });
}

@Component({
    selector: 'app-dashboard',
    templateUrl: 'receipt-detail.component.html',
    styleUrls: ['../../../app.component.css']
})

@Injectable()
export class ReceiptDetailComponent implements OnInit {

    constructor(@Inject(WINDOW) private window: Window, private router: Router, 
    private service: ReceiptService, private localStorage: LocalStorageService) { }

    ItemList: any[]
    Detail: any
    
    ngOnInit() {
        console.log("On init recipe detail");
        this.Detail = this.localStorage.GetReceiptDetail();
        this.ItemList = this.Detail.detail;
    }

    onBackButtonClick() {
        console.log("On back button clicked");
        this.router.navigateByUrl('receipt?status=0');
    }

    
}
    