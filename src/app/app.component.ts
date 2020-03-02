import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services.service';
import { Servicio } from './servicio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ ServicesService ]
})
export class AppComponent implements OnInit {
  public title = 'Catálogo de servicios';
  public serv: Servicio[];
  // public serv: Array<Servicio>;
  // public serv: Object;

  constructor(
    protected servicesService: ServicesService
  ) { }

  ngOnInit() {
    this.getServices();
  }

  getServices() {
    /*
    this.servicesService.getServices().subscribe(
      result => {
        this.services = result;
      },
      error => {
        //console.log(<any>error);
      }
    );
    */
   this.servicesService.getServices()
      .subscribe(
        (data) => { // éxito
          this.serv = <Servicio[]>data;
        },
        (error) => { // error
          console.log(error);
        }
      );

  }
}
