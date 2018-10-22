import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  changeStatus = false;
  numberofServer:number = 0;
  constructor() {
    setTimeout(()=>{
      this.changeStatus = true
    }, 3000)
  }

  ngOnInit() {
  }
  serverId:number = 10;
  serverStatus:string = "offline";
  serverName:string = "No Name";
  isServerCreated:boolean = false;
  serverNames = ['TestServer 1', 'TestServer 2'];
  getServerStatus(){
    return this.serverStatus;
  }

  addServer() {
    this.isServerCreated = true;
  this.numberofServer++;
  this.serverNames.push(this.serverName);
  console.log(this.serverNames);
 return this.serverStatus = "The server was created with name "+ this.serverName + " and was created " + this.numberofServer + " times";
}
}
