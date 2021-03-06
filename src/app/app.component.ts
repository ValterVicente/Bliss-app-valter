import { Component, OnInit } from '@angular/core';
import { ServerStatusService } from './server-status.service';
import { ServerStatus } from './models/server-status';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {

  serverStatus: boolean;

  constructor(
    private serverService: ServerStatusService
  ) {
    this.serverService.getStatus()
    .subscribe((data: ServerStatus) => {
      this.serverStatus = data['status'] === 'OK' ? true : false;
    });
  }

  retryAction() {
    window.location.reload();
  }


}
