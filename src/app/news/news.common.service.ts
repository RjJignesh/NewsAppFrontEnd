import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsCommonService {
  searchSubject = new Subject();
  constructor() { }
  sendMsg(msg: string) {
    this.searchSubject.next(msg);
  }
  
  receivedMsg(): Observable <any> {
    return this.searchSubject.asObservable();
  }
}
