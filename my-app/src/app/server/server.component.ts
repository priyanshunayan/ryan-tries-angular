import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  changeStatus = false;
  constructor() {
    setTimeout(()=>{
      this.changeStatus = true
    }, 3000)
  }

  ngOnInit() {
  }
  serverId:number = 10;
  serverStatus:string = "offline";

  getServerStatus(){
    return this.serverStatus;
  }
}
