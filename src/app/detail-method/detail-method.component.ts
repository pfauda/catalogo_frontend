import { Component, OnInit, Input } from '@angular/core';
import { ServicesService } from '../services.service';
import { Metodo } from '../metodo';
import { combineLatest } from 'rxjs';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-detail-method',
  templateUrl: './detail-method.component.html',
  styleUrls: ['./detail-method.component.css'],
  providers: [ ServicesService ]
})

export class DetailMethodComponent implements OnInit {

  public metodo: Metodo;
  public fade: boolean;

  @Input() service: string;
  @Input() method: string;
  @Input() version: string;

  constructor(
    private _servicesService: ServicesService
  ) { }

  ngOnInit() {
    this.getMethod(this.service, this.method, this.version);
  }

  getMethod(_service: string, _method: string, _version: string) {

    /* this.metodo = null; */
    this.fade = true;
    combineLatest([timer(300), this._servicesService.getMethod(_service, _method, _version)])
      .pipe(map(x => {
        return x[1];
      }))
      .subscribe(result => {
        this.metodo = new Metodo(_service + '.' + _method,
          '',
          'Descripción del servicio: ' + _service + ' con método: ' + _method,
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
        // document.getElementById('detailMethod').scrollTop = 0;
      });

  }
}
