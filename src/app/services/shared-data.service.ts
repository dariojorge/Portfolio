import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as homeWrapperModel from '../../assets/information/homePage.json';
import * as headerWrapperModel from '../../assets/information/headerPage.json';
import * as unseenValueWrapperModel from '../../assets/information/unseenValue.json';
import * as project1WrapperModel from '../../assets/information/project1.json';
import * as projectWrapperModel from '../../assets/information/unseenValue.json';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  offsetHeight: number = 100;
  headerSizeBehavior: BehaviorSubject<number> = new BehaviorSubject(0);
  homeWrapperBehavior: BehaviorSubject<any> = new BehaviorSubject({});
  headerWrapperBehavior: BehaviorSubject<any> = new BehaviorSubject({});
  unseenValueWrapperBehavior: BehaviorSubject<any> = new BehaviorSubject({});
  project1WrapperBehavior: BehaviorSubject<any> = new BehaviorSubject({});
  projectWrapperBehavior: BehaviorSubject<any> = new BehaviorSubject({});

  constructor() {
    this.homeWrapperBehavior.next(homeWrapperModel);
    this.headerWrapperBehavior.next(headerWrapperModel);
    this.projectWrapperBehavior.next(projectWrapperModel);
    this.unseenValueWrapperBehavior.next(unseenValueWrapperModel);
    this.project1WrapperBehavior.next(project1WrapperModel);
  }
}
