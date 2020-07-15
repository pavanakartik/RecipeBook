import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

    serverId =10;
    serverName ="App Server";
    createServer= false;
    newServerName= "my first server"
   
  constructor() {
    
    setTimeout(
      ()=>{ this.createServer= true}, 2000
    )
  }

  ngOnInit(): void {
  }

// PROPERTY BINDING EXAMPLES
  allowNewServer(){
    this.newServerName= "This is a brand new server";
  }

  // EVENT BINDING EXAMPLE
 changeServerName(event: Event){
   this.serverName= (<HTMLInputElement> event.target).value;
 }

}
