import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: any = {};
  constructor(
    public navCtrl: NavController
  ) { }
  login(): void {
    if (this.form.email === 'admin' && this.form.senha === 'admin' ) {
      this.navCtrl.navigateRoot('TabsPage');
    }
    console.log('Login Efetuado');
  }

  ngOnInit() {
  }

}
