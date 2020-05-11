import {Inject, Injectable } from '@angular/core';
import { StorageService, LOCAL_STORAGE,} from 'ngx-webstorage-service'

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public userList = String;

  constructor(@Inject(LOCAL_STORAGE)private storage: StorageService) { }

  public storeOnLocalStorage(user:String):void
  {
    const userListStorage = this.storage.get('USER_LIST') || [];
    userListStorage.push({username: user, fecha: new Date()});
    this.storage.set('USER_LIST', userListStorage);
    this.userList = userListStorage; 
  }

  public readLocalStorage():object
  {
    return this.storage.get('USER_LIST'); 
  }
}
