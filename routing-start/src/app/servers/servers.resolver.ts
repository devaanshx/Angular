import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ServersService } from './servers.service';

interface Server{
  id: number;
  name: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServersResolver implements Resolve<Server> {

  constructor(private serverServie: ServersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
    return this.serverServie.getServer(+route.params['id']??1);
  }
}
