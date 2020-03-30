import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Servicio } from '../servicio';
import { Metodo } from '../metodo';
import { combineLatest } from 'rxjs';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';
import {animate, state, style, transition, trigger, query, stagger} from '@angular/animations';

/* import { relativeTimeThreshold } from 'moment'; */

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ ServicesService ],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      )
    ]),
    trigger('indicatorExpanded', [
      state('collapsed', style({transform: 'scaleY(0)'})),
      state('expanded', style({transform: 'scaleX(1)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      )
    ]),
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
//        style({transform: 'scaleY(0)'}),
//        animate('1s ease-out', style({transform: 'scaleY(1)'}))
        style({ height: 0, opacity: 0 }),
        animate('1s ease-out', style({ height: '100%', opacity: 1 }))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
//        style({transform: 'scaleY(1)'}),
//        animate('1s ease-in', style({transform: 'scaleY(0)'}))
        style({ height: '100%', opacity: 1 }),
        animate('1s ease-in', style({ height: 0, opacity: 0 }))
      ])
    ])
  ]
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

  onServiceSelected(item: Servicio) {
    if ( this.serviceSelected === item.servicioNombre ) {
      this.serviceSelected = '';
    } else {
      this.serviceSelected = item.servicioNombre;
    }
    console.log(this.serviceSelected);
  }

  onMethodSelected(item: Metodo) {
    this.methodSelected = item.metodoNombre;
    this.versionSelected = item.metodoVersion;
    this.getMethod(this.serviceSelected, this.methodSelected, this.versionSelected);
    console.log(this.methodSelected);
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

