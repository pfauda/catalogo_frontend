import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServicesService } from '../services.service';
import { Servicio } from '../servicio';

@Component({
  selector: 'app-menulateral',
  templateUrl: './menulateral.component.html',
  styleUrls: ['./menulateral.component.css'],
})
export class MenulateralComponent implements OnInit {

  public servicios: Servicio[];
  public serviceSelected: string;
  public methodSelected: string;
  public versionSelected: string;

  @Output() menuLoaded = new EventEmitter();
  @Output() itemSelected = new EventEmitter();

  constructor(
    private _servicesService: ServicesService
  ) { }

  ngOnInit() {
    this.getServices();
  }

  getServices() {

    this._servicesService.getServices().subscribe(
      result => {
        // Notificar que el menú ya se cargó
        this.menuLoaded.emit();
        this.servicios = result;
      },
      error => {
        console.log(error);
      }
    );
  }

  setItemSelected(_service: string, _method: string, _version: string) {
    this.serviceSelected = _service;
    this.methodSelected = _method;
    this.versionSelected = _version;
    this.itemSelected.emit({ service: _service, method: _method, version: _version });
  }

}
