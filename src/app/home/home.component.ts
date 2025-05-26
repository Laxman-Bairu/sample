import { Component, OnInit, signal } from '@angular/core';
import { CommonService } from '../Service/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  count = signal(0);
  colors = signal(['red','green'])
  resData: any;
  isshow:Boolean = true;
constructor(private CommonService:CommonService){}
  ngOnInit(): void {
    // this.CommonService.getData().subscribe(data => {
    //   console.log(data);
    //   this.resData = data.data[0];
    // })
  }
  inc(){
    this.count.set(this.count() + 1);
    this.colors();
    this.colors.update(value => [...value, "blue"])
    console.log(this.colors());
    
  }
  dec(){
    if(this.count() > 0){
      this.count.set(this.count() - 1);
    }
    
  }
  clicktosee(){
    this.CommonService.getData().subscribe(data => {
      console.log(data);
      this.resData = data.data[1];
    })
  }
}
