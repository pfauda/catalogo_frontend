import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Servicio } from '../servicio';
import { Metodo } from '../metodo';
import { combineLatest } from 'rxjs';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';

/* import { relativeTimeThreshold } from 'moment'; */

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
  public fade: boolean;

  constructor(
    private _servicesService: ServicesService
  ) { }


  ngOnInit() {
    this.getServices();
    this.fade = false;
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

    /* this.metodo = null; */
    this.fade = true;

    combineLatest([timer(300), this._servicesService.getMethod(_service, _method, _version)])
      .pipe(map(x => {
        return x[1];
      }))
      .subscribe(result => {
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
        this.fade = false;
        document.getElementById('detailMethod').scrollTop = 0;
      });

/*     this._servicesService.getMethod(_service, _method, _version).subscribe(
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
        this.fade = false;
        document.getElementById('detailMethod').scrollTop = 0;
      },
      error => {
        this.metodo = null;
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
        this.fade = false;
        console.log(<any>error);
      }
    );
 */
  }

}

