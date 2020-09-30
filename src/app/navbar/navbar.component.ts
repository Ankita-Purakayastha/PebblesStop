import { Component, OnInit } from '@angular/core';
import { SessionService} from '../session.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showFiller = false;
  constructor( private router:Router, private storageservice:SessionService) { }

  ngOnInit(): void {
  }
  myClick(){
    this.router.navigate (['/login'])
  }
  
  
  
  
  myClick2(){
    this.storageservice.removeStorageValue();
    this.router.navigate(['/login']);
  
  }
  

}
