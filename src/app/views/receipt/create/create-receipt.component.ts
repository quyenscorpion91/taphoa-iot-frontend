import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { LoginService } from '../../../service/login.service'
import { RegisterService } from '../../../service/register.service';
import { WINDOW } from '../../../app.module';
import { LocalStorageService } from '../../../service/local-storage.service'
import { ReceiptService } from '../../../service/receipt.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'create-receipt.component.html'
})

@Injectable()
export class CreateReceiptComponent {

    constructor(@Inject(WINDOW) private window: Window, private router: Router, 
        private localStorage: LocalStorageService, private recipe: ReceiptService) { }


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

    onCreateReceiptClick(data: any, valid: boolean) {
        console.log("On Create Item button clicked")
        console.log("Quyen debug register data: ", data)
        console.log("Quyen debug register valid: ", valid)

        if(valid === false) {
            console.log("Quyen debug: validate failed");
            this.router.navigateByUrl('receipt/create');
            return;
        }

        var host = "http://" + this.window.location.hostname;
        data.token = this.localStorage.GetStorageToken()
        data.detail = this.localStorage.GetCartListItems()
        data.status = 0;
        this.recipe.CreateRecipe(data, host).then((res) => {
            this.localStorage.SetCartListItems([]);
            this.router.navigateByUrl('receipt?status=0');
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
    