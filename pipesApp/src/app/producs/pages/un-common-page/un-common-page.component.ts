import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-un-common-page',
  templateUrl: './un-common-page.component.html',
  styleUrls: ['./un-common-page.component.css'],
})
export class UnCommonPageComponent {
  //i18n select
  name: string = 'Luciano';
  gender: 'male' | 'female' = 'male';

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient() {
    if (this.name == 'Luciano') {
      (this.name = 'Rosa'), (this.gender = 'female');
    } else {
      (this.name = 'Luciano'), (this.gender = 'male');
    }
  }

  //i18n Plural
  clients = ['Luciana', 'Gamarra', 'Luciana', 'Dalila'];
  clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    other: 'tenemos # clientes esperando',
  };
  deleteClient() {
    this.clients.pop();
  }

  //KeyValue pipe
  person = {
    name: 'Luciano',
    age: 26,
    gender: 'male',
    area: 'frontend',
  };

  //Async pipe
  miObservableTimer = interval(1000);
  miPromiseTimer = new Promise((resolve, _) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
    }, 2000);
  });

  //NOTA: el pipe async hace una subscripcion y muestra el resultado de esta
  // automaticamente limpia la subscripcion cuando se elimina el componente
}
