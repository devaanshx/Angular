import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls:['./server.component.css']
})
export class ServerComponent implements OnInit{
    allowNewServer = false;
    serverCreationStatus = "No Server Created";
    serverName = "";
    username = "";
    allowVisiblity = false;
    counter = [];
    // current_time = new Date();

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

    ngOnInit()  {}

    onCreateServer () {
        this.serverCreationStatus = "Server was Created!"
    }

    onUpdateServer(event) {
        this.serverName = event.target.value;
    }

}