import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
// import { RegisterComponent } from './views/register/register.component';
// import { WHAddItemComponent } from './views/warehouse-mgmt/add-item.component';
// import { WHUpdateItemComponent } from './views/warehouse-mgmt/update-item.component';
// import { CreateReceiptComponent } from './views/receipt/create/create-receipt.component';


const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';

import { LoginService } from './service/login.service'
import { RegisterService } from './service/register.service';
import { LocalStorageService } from './service/local-storage.service'
import { WarehouseService } from './service/warehouse.service';
import { ReceiptService } from './service/receipt.service';
import { CustomerService } from './service/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { InjectionToken, FactoryProvider } from '@angular/core';

import { StorageServiceModule } from 'ngx-webstorage-service';

export const WINDOW = new InjectionToken<Window>('window');
const windowProvider: FactoryProvider = {
  provide: WINDOW,
  useFactory: () => window
};

export const WINDOW_PROVIDERS = [
  windowProvider
]

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    IconModule,
    IconSetModule.forRoot(),
    HttpClientModule,
    StorageServiceModule,    
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    // WHAddItemComponent,
    // WHUpdateItemComponent,
    // CreateReceiptComponent,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    IconSetService,
    LoginService,
    LocalStorageService,
    WarehouseService,
    RegisterService,
    ReceiptService,
    ReceiptService,
    CustomerService,
    WINDOW_PROVIDERS,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
