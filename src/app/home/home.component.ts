import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Servicio } from '../servicio';
import { Metodo } from '../metodo';
import { relativeTimeThreshold } from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ ServicesService ]
})
export class HomeComponent implements OnInit {

  public servicios: Servicio[];
  public metodo: Metodo;
  public serviceSelected: string;
  public methodSelected: string;
  public versionSelected: string;

  constructor(
    private _servicesService: ServicesService
  ) { }


  ngOnInit() {
    this.getServices();
  }

  getServices() {

    this._servicesService.getServices().subscribe(
      result => {
        // this.servicios = <Servicio[]>result;
        this.servicios = result;
      },
      error => {
        console.log(error);
      }
    );
  }

  getMethod(_service: string, _method: string, _version: string) {

    this.metodo = null;
    document.getElementById('detailMethod').scrollTop = 0;

    this._servicesService.getMethod(_service, _method, _version).subscribe(
      result => {
        this.serviceSelected = _service;
        this.methodSelected = _method;
        this.versionSelected = _version;
        this.metodo = new Metodo(this.serviceSelected + '.' + this.methodSelected,
                                '',
                                'Descripción del servicio: ' + this.serviceSelected + ' con método: ' + this.methodSelected,
                                'S99',
                                true,
                                '',
                                result['WSDL'],
                                '',
                                result['XSD'],
                                result['Request'],
                                result['ResponseOK'],
                                result['ResponseErrNeg'],
                                result['GraphSchema'],
                                result['GraphPatern']);
      },
      error => {
        this.serviceSelected = '';
        this.methodSelected = '';
        this.metodo = new Metodo(this.serviceSelected + '.' + this.methodSelected,
                                 '',
                                 '',
                                 '',
                                 false,
                                 '',
                                 '',
                                 '',
                                 '',
                                 '',
                                 '',
                                 '',
                                 '',
                                 '');
        console.log(<any>error);
      }
    );

  }

}

