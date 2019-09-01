import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerStatus } from './models/server-status';

@Injectable({
  providedIn: 'root'
})
export class ServerStatusService {

  constructor(private http: HttpClient) { }

  serverUrl = 'https://private-anon-718f4d48bf-blissrecruitmentapi.apiary-mock.com/health';

  getStatus() {
    return this.http.get<ServerStatus>(this.serverUrl);
  }
}
