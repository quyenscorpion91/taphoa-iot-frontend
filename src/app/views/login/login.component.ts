import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { LoginService } from '../../service/login.service'
import { ADMIN_ROLE, OWNER_ROLE, CUSTOM_ROLE } from '../../service/login.service'
import { WINDOW } from '../../app.module';
import { LocalStorageService } from '../../service/local-storage.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})

@Injectable()
export class LoginComponent { 
  constructor(@Inject(WINDOW) private window: Window, private router: Router, 
      private login: LoginService, private localStorage: LocalStorageService) {}

  ngOnInit() {
    // var localToken = this.localStorage.GetStorageToken()
    // console.log("Quyen debug: token: ", localToken)
    // console.log("Quyen debug: token len: ", localToken.length)
    // if(localToken != undefined) {
    //   if(localToken.length != 0) {
    //     var host = "http://" + this.window.location.hostname;
    //     this.login.GetRoleByToken(localToken, host).then((res) => {
    //       console.log("Quyen debug: resposne data for get role: ", res)
    //       this.localStorage.SetStorageRole(res.role);
    //       this.navigateDashboardByRole(res.role);
    //     }).catch(err => {
    //       // TODO: handler error page
    //       this.router.navigateByUrl('login');
    //     });
    //   }
    // }
  }

  onLoginSubmit(data: any) {
    console.log("onLoginSubmid clicked");
    console.log("Quyen debug data: ", data);

    if(data.username == undefined) {
      // TODO: handler error page
      this.router.navigateByUrl('404');
    }
    if(data.passwd == undefined) {
      // TODO: handler error page
      this.router.navigateByUrl('404');
    }
    this.localStorage.SetStorageUser(data.username);
    // this.localStorage.SetStorageDashboardUser(data.username);

    var host = "http://" + this.window.location.hostname;
    this.login.SubmidLogin(data, host).then((res) => {
      console.log("Quyen debug: resposne data: ", res)
      if (res.token != undefined) {
        console.log("Quyen debug: token local storage: ", res.token)
        this.localStorage.SetStorageToken(res.token);
        this.localStorage.SetStorageRole(res.role);
        this.navigateDashboardByRole(res.role);
      } 
    }).catch(err => {
      // TODO: handler error page
      this.router.navigateByUrl('404');
    });
  }

  private navigateDashboardByRole(role :number) {
    if (role == undefined) {
      this.router.navigateByUrl('login');
      return
    }

    if (role === ADMIN_ROLE) {
      this.router.navigateByUrl('login');
      return;
    } else if (role === OWNER_ROLE) {
      this.router.navigateByUrl('dashboard');
      return;
    }

    this.router.navigateByUrl('login');
  }
}

