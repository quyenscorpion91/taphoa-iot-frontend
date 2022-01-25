import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

export const LOCAL_TOKEN = 'local_token'
export const LOCAL_USER = 'local_user'
export const LOCAL_ROLE = 'local_role'
export const LOCAL_DASHBOARD_USER = 'local_dashboard_user'
export const LOCAL_CART_LIST = 'local_cart_list'
export const LOCAL_RECIPE_DETAIL = 'local_recipe_detail'
export const LOCAL_UPDATE_ITEM = 'local_update_item'

@Injectable()
export class LocalStorageService {
     constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

     public SetStorageToken(token: string): void {
          this.storage.set(LOCAL_TOKEN, token);
     }

     public GetStorageToken(): string {
          return this.storage.get(LOCAL_TOKEN);
     }

     public SetStorageUser(user: string): void {
          this.storage.set(LOCAL_USER, user);
     }

     public GetStorageUser(): string {
          return this.storage.get(LOCAL_USER);
     }

     public SetStorageRole(role: number): void {
          this.storage.set(LOCAL_ROLE, role);
     }

     public GetStorageRole(): number {
          return this.storage.get(LOCAL_ROLE);
     }

     public SetCartListItems(cartList: any[]): void {
          this.storage.set(LOCAL_CART_LIST, cartList);
     }

     public GetCartListItems(): any[] {
          return this.storage.get(LOCAL_CART_LIST);
     }

     public SetReceiptDetail(recipeDt: any): void {
          this.storage.set(LOCAL_RECIPE_DETAIL, recipeDt);
     }

     public GetReceiptDetail(): any {
          return this.storage.get(LOCAL_RECIPE_DETAIL);
     }

     public SetUpdateItem(item: any): void {
          this.storage.set(LOCAL_UPDATE_ITEM, item);
     }

     public GetUpdateItem(): any {
          return this.storage.get(LOCAL_UPDATE_ITEM);
     }
}