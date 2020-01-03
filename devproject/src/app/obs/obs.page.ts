import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AnotacoesService } from '../services/anotacoes.service';
import { TopicosService } from '../services/topicos.service';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-obs',
  templateUrl: './obs.page.html',
  styleUrls: ['./obs.page.scss'],
})
export class ObsPage implements OnInit {
  newTitulo; newNota;

  constructor(
    private alertController: AlertController,
    public noteService: AnotacoesService,
    private topService: TopicosService,
    private cam: Camera) {}

  addNota() {
    console.log('Enviar', this.newTitulo, this.newNota,
    this.topService.topicos.filter((item, index, arr) => item.ativado).map(({nome}) => nome));
    this.noteService.addAnotacao(this.newTitulo, this.newNota,
      this.topService.topicos.filter((item, index, arr) => item.ativado).map(({nome}) => nome));
  }

  capturar() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.cam.DestinationType.DATA_URL,
      mediaType: this.cam.MediaType.PICTURE,
      correctOrientation: true
    };

    this.cam.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      const base64Image = 'data:image/jpeg;base64,' + imageData;
      this.noteService.addFotoAnotacao(this.newTitulo, base64Image,
        this.topService.topicos.filter((item, index, arr) => item.ativado).map(({nome}) => nome));
    }, (err) => {
    // Handle error
    });
  }

  ngOnInit() {
  }

}
