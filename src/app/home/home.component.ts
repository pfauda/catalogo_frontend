import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  public serviceSelected: string;
  public methodSelected: string;
  public versionSelected: string;
  public fade: boolean;
  public loaded: boolean;

  constructor() { }

  ngOnInit() {
    this.fade = false;
    this.loaded = false;
  }

  setMenuLoaded() {
    this.loaded = true;
  }

  setMethodSelected(_item) {
    this.serviceSelected = _item.service;
    this.methodSelected = _item.method;
    this.versionSelected = _item.version;
    // Refrescar el elemento de detalle
    this.fade = false;
    setTimeout((x: any) => this.fade = true);
  }

}

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


