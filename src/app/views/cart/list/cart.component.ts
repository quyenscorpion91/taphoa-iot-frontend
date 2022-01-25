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

export function getAlertConfig(): AlertConfig {
    return Object.assign(new AlertConfig(), { type: 'success' });
}

@Component({
    selector: 'app-dashboard',
    templateUrl: 'cart.component.html'
})

@Injectable()
export class CartComponent implements OnInit {

    constructor(@Inject(WINDOW) private window: Window, private router: Router, 
    private service: WarehouseService, private localStorage: LocalStorageService) { }

    ItemList: any[]

    ngOnInit() {
        this.ItemList = this.localStorage.GetCartListItems()
    }

    onCheckoutButtonClick() {
        console.log("On Checkout button clicked");
        this.router.navigateByUrl('receipt/create');
    }

    onAddToCardButton() {
        console.log("On onAddToCardButton clicked");
        this.router.navigateByUrl('cart/add');
    }
}
    