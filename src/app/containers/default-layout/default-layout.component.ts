import {Component} from '@angular/core';
import { navItems } from '../../_nav';
import { Router } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { LoginService } from '../../service/login.service'
import { WINDOW } from '../../app.module';
import { LocalStorageService } from '../../service/local-storage.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  constructor(@Inject(WINDOW) private window: Window, private router: Router, 
      private login: LoginService, private localStorage: LocalStorageService) {}

  ngOnInit() {
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  onLogoutClick() {
    this.localStorage.SetStorageToken("")
    // this.localStorage.SetStorageDashboardUser("")
    this.localStorage.SetStorageUser("")
    this.localStorage.SetCartListItems([])
    this.localStorage.SetReceiptDetail(null)
    this.localStorage.SetReceiptDetail(null)
    this.localStorage.SetUpdateItem(null)
    this.router.navigateByUrl('login');
  }
}
