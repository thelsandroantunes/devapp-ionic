import { Component, OnInit } from '@angular/core';
import { Html5Audio } from 'src/providers/html5audio';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.page.html',
  styleUrls: ['./radio.page.scss'],
})
export class RadioPage implements OnInit {

  stations = [
    {
      name: 'Amazonas',
      url: 'http://stream.dancewave.online:8080/dance.mp3'
    }
  ];
  tocar: boolean;
  musica: any;

  constructor(public navCtrl: NavController, private player: Html5Audio) {
    this.tocar = true;
    this.musica = player;

    if (this.tocar === true) {
      this.musica.play('http://nashe1.hostingradio.ru:80/nashe-128.mp3');
    }
  }

  ionViewDidEnter() {
    this.player = new Html5Audio();
  }

  play(url: string) {
    this.tocar = true;
    this.musica.play('http://nashe1.hostingradio.ru:80/nashe-128.mp3');
    console.log(this.tocar);
  }

  stop() {
    this.tocar = false;
    this.musica.stop();
    console.log(this.tocar);
  }

  ngOnInit() {
  }

}
