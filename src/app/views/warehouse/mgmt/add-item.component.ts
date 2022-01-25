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
    templateUrl: 'add-item.component.html'
    
})

@Injectable()
export class WHAddItemComponent {

    constructor(@Inject(WINDOW) private window: Window, private router: Router, 
        private localStorage: LocalStorageService, private whService: WarehouseService) { }


    ngOnInit() {
        var localToken = this.localStorage.GetStorageToken()
        var localRole = this.localStorage.GetStorageRole()

        console.log("Quyen debug: token: ", localToken)
        console.log("Quyen debug: token len: ", localToken.length)
        if(localToken != undefined) {
            // Process
        } else {
            // TODO: hanlder error page
            this.router.navigateByUrl('login');
        }
    }

    onCreateItemClick(data: any, valid: boolean) {
        console.log("On Create Item button clicked")
        console.log("Quyen debug register data: ", data)
        console.log("Quyen debug register valid: ", valid)

        if(valid === false) {
            console.log("Quyen debug: validate failed");
            this.router.navigateByUrl('warehouse/wh-add-item');
            return;
        }

        var host = "http://" + this.window.location.hostname;
        data.token = this.localStorage.GetStorageToken()
        this.whService.CreateItem(data, host).then((res) => {
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
    