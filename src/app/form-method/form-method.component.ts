import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Servicio } from '../servicio';
import { Metodo } from '../metodo';

@Component({
  selector: 'app-form-method',
  templateUrl: './form-method.component.html',
  styleUrls: ['./form-method.component.scss'],
  providers: [ ServicesService ]
})
export class FormMethodComponent implements OnInit {

  public editing: boolean;

  constructor(
    private _servicesService: ServicesService
  ) {
    this.editing = false;
  }

  ngOnInit() {
  }

  getMethodInfo(_service: string, _method: string, _version: string) {

    // return this._servicesService.getMethod({ _service, _metodo: _method, _version })

  }

  Edit() {
    this.editing = true;
  }
  Confirm() {
    this.editing = false;
  }
  Cancel() {
    this.editing = false;
  }
}
