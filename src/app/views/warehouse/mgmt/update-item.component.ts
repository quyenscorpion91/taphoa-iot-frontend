import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { LoginService } from '../../../service/login.service'
import { RegisterService } from '../../../service/register.service';
import { WINDOW } from '../../../app.module';
import { LocalStorageService } from '../../../service/local-storage.service'
import { WarehouseService } from '../../../service/warehouse.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'update-item.component.html'
    
})

@Injectable()
export class WHUpdateItemComponent {

    constructor(@Inject(WINDOW) private window: Window, private router: Router, 
        private localStorage: LocalStorageService, private whService: WarehouseService) { }


    Item: any

    ngOnInit() {
        var localToken = this.localStorage.GetStorageToken()
        var localRole = this.localStorage.GetStorageRole()
        this.Item = this.localStorage.GetUpdateItem()

        console.log("Quyen debug: token: ", localToken)
        console.log("Quyen debug: token len: ", localToken.length)
        console.log("Quyen debug: update item: ", this.Item)
        if(localToken != undefined) {
            // Process
        } else {
            // TODO: hanlder error page
            this.router.navigateByUrl('login');
        }
    }

    onUpdateItemClick(data: any, valid: boolean) {
        console.log("On Update Item button clicked")
        console.log("Quyen debug register data: ", data)
        console.log("Quyen debug register valid: ", valid)

        if(valid === false) {
            console.log("Quyen debug: validate failed");
            this.router.navigateByUrl('warehouse/wh-update-item');
            return;
        }

        var host = "http://" + this.window.location.hostname;
        data.token = this.localStorage.GetStorageToken()
        data.id = this.Item.id
        this.whService.UpdateItem(data, host).then((res) => {
            this.router.navigateByUrl('warehouse');
        }).catch(err => {
            // TODO: handler error page
            this.router.navigateByUrl('500');
        });
        // this.register.CreateNewUser(CLINIC_ROLE ,localToken, data, host).then((res) => {
        //     this.router.navigateByUrl('admin-dashboard');
        // }).catch(err => {
        //     // TODO: handler error page
        //     this.router.navigateByUrl('500');
        // });
    }

}
    