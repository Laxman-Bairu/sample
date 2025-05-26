import { Component } from '@angular/core';
import { Route,Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private route:Router){}
  Logout(){
    this.route.navigateByUrl('login')
  }
}
