import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs } from '@angular/http';
import { map } from 'rxjs/operators';
import { GLOBAL } from '../assets/global';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  public url: string;

  constructor(
    public _http: Http
  ) {
    this.url = GLOBAL.url;
  }

  getServices() {
    return this._http.get(this.url + 'services')
        .pipe( map(res => res.json()) );
  }

  getMethod(_service: string, _metodo: string, _version: string) {

    var postBody = { 'servicio': _service, 'metodo': _metodo, 'version': _version};
    return this._http.post(this.url + 'metodo', postBody)
        .pipe( map(res => res.json()) );

  }

}