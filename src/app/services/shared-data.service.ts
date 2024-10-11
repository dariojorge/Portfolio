import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as projectWrapperModel from '../../assets/information/homePage.json';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  offsetHeight: number = 100;
  headerSizeBehavior: BehaviorSubject<number> = new BehaviorSubject(0);
  projectWrapperBehavior: BehaviorSubject<any> = new BehaviorSubject({});

  constructor() {
    this.projectWrapperBehavior.next(projectWrapperModel);
  }
}
