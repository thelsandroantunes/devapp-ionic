import { Component, OnInit } from '@angular/core';
import { RecuperaAPIService } from '../services/recupera-api.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  users: any;

  constructor(
    private api: RecuperaAPIService) {
      api.getUsers().then((data: any) => {
        this.users = data.data;
      });
    }

  ngOnInit() {
  }

}
