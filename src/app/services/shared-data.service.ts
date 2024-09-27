import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  offsetHeight: number = 100;
  headerSize: BehaviorSubject<number> = new BehaviorSubject(0);
  
  constructor() { }
}
