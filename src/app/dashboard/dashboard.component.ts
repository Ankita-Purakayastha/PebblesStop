import { Component, OnInit } from '@angular/core';
import {SessionService} from '../session.service';
import{Router} from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor( private router:Router, private storageservice:SessionService) { }

  ngOnInit(): void {
  }

   
  myClick2(){
    this.storageservice.removeStorageValue();
    this.router.navigate(['/login']);
  
  }

}
