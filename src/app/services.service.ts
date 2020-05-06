import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from '../assets/global';
import { map } from 'rxjs/operators';
import { Metodo } from './metodo';
import { Servicio } from './servicio';
import { combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  public url: string;

  constructor(protected http: HttpClient) {
    this.url = GLOBAL.url;
  }

  public getServices() {
    return this.http.get(this.url + 'services')
      .pipe(map(data => <Servicio[]>data));
  }

  public getMethod(_service: string, _metodo: string, _version: string) {

    const postBody = { 'servicio': _service, 'metodo': _metodo, 'version': _version };
    return this.http.post(this.url + 'metodo', postBody)
      .pipe(map(data => {
        return <Metodo>data;
      }));

  }

}

/*
        new Metodo(
          data.metodoNombre,
          data.metodoVersion,
          data.descripcion,
          data.id_tfs,
          data.transaccional,
          data.patch_wsdl,
          data.archivo_wsdl,
          data.patch_xsd,
          data.archivo_xsd,
          data.request_xml,
          data.responseOk_xml,
          data.responseErr_xml,
          data.archivo_esquema,
          data.archivo_patron
*/
