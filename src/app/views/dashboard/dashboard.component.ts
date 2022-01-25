import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { AlertConfig } from 'ngx-bootstrap/alert';
import { Injectable, Inject } from '@angular/core';
import { LoginService } from '../../service/login.service'
import { WINDOW } from '../../app.module';
import { LocalStorageService } from '../../service/local-storage.service'
import { ReceiptService } from '../../service/receipt.service';

export function getAlertConfig(): AlertConfig {
    return Object.assign(new AlertConfig(), { type: 'success' });
}

@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['../../app.component.css']
})

@Injectable()
export class DashboardComponent implements OnInit {

    constructor(@Inject(WINDOW) private window: Window, private router: Router, 
    private recipe: ReceiptService, private localStorage: LocalStorageService) { }

    ItemList: any[]

    TotalWait = '0'
    ProfitWait = '0'
    TotalFinish = '0'
    ProfitFinish = '0'
    Total = '0'
    Profit = '0'

    ngOnInit() {
        var date = new Date();
        var dateString = date.getFullYear().toString() + "-" + 
            ('0' + (date.getMonth()+1)).slice(-2) + "-" + 
            ('0' + date.getDate()).slice(-2)
        var dateFrom = dateString + "T00:00:00.00Z"
        var dateTo = dateString + "T23:59:59.00Z"
        console.log("Quyen debug: dateFrom ", dateFrom);
        console.log("Quyen debug: dateTo ", dateTo);

        var host = "http://" + this.window.location.hostname;
        var token = this.localStorage.GetStorageToken()

        this.recipe.GetReceiptReport(255, token, dateFrom, dateTo, host).then((res) => {
            console.log("Quyen debug server return: ", res);
            if((res.total_mn != undefined) || (res.total_profit != null)) {
                this.TotalWait = res.total_mn.toString()
            }
            if((res.total_profit != undefined) || (res.total_profit != null)) {
                this.ProfitWait = res.total_profit.toString()
            }
        }).catch(err => {
            // TODO: handler error page
            this.router.navigateByUrl('500');
        });

        this.recipe.GetReceiptReport(3, token, dateFrom, dateTo, host).then((res) => {
            console.log("Quyen debug server return: ", res);
            if((res.total_mn != undefined) || (res.total_profit != null)) {
                this.TotalFinish = res.total_mn.toString()
            }
            if((res.total_profit != undefined) || (res.total_profit != null)) {
                this.ProfitFinish = res.total_profit.toString()
            }
        }).catch(err => {
            // TODO: handler error page
            this.router.navigateByUrl('500');
        });
    }

    onReportClick(data: any, valid: boolean, status: number) {
        console.log("On onReportClick");
        console.log("Quyen debug data: ", data);
        console.log("Quyen debug typeof from: ", typeof(data.from))
        console.log("Quyen debug typeof to: ", typeof(data.to))

        if(valid === false) {
            console.log("Quyen debug: validate failed");
            this.router.navigateByUrl('dashboard');
            return;
        }
        data.from
        data.to
        console.log("Quyen debug from: ", data.from)
        console.log("Quyen debug to: ", data.to)

        var host = "http://" + this.window.location.hostname;
        var token = this.localStorage.GetStorageToken()

        this.recipe.GetReceiptReport(status, token, data.from + "T00:00:00.00Z", data.to + "T23:59:59.00Z", host).then((res) => {
            console.log("Quyen debug server return: ", res);
            this.Total = res.total_mn
            this.Profit = res.total_profit
            this.ItemList = res.detail
        }).catch(err => {
            // TODO: handler error page
            this.router.navigateByUrl('500');
        });
    }
}
    