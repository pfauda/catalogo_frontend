import { Component } from '@angular/core';
import { ServicesService } from './services.service';
import { Servicio } from './servicio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ServicesService ]
})
export class AppComponent {
  public title = 'Catálogo de servicios';
  public services: Servicio[];

  constructor(
    private _servicesService: ServicesService
  ) { }

  ngOnInit() {
    this.getServices();
  }

  getServices() {
    this._servicesService.getServices().subscribe(
      result => {
        this.services = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }  
}