import { Component } from '@angular/core';
import { DemoService } from '../service/demo.service';
@Component({
  selector: 'app-httpdemo',
  templateUrl: './httpdemo.component.html',
  styleUrl: './httpdemo.component.css'
})
export class HttpdemoComponent {
  allUser: any;
  /**
   *
   */
  constructor(private dataService:DemoService) {
   
    
  }

  onGetUserButtonClick(){
    this.dataService.getUser().subscribe((data)=>this.allUser=data);

  }
}
