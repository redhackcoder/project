import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilService } from '../util.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  register:any;
  oset=0;
  showCity = true;
  constructor(
    private util: UtilService,
    private navCtrl: NavController, 
  ) { }

  ngOnInit() {
    // console.log(registerCredentials)
  }

  otp() {
    // Enabling Side Menu
    this.showCity = false;
    this.oset = 1;
    // this.util.setMenuState(true);
    // this.navCtrl.navigateRoot('/home', { animationDirection: 'forward' });
  }
  login() {
    // Enabling Side Menu
    this.showCity = false;
    this.util.setMenuState(true);
    this.navCtrl.navigateRoot('/home', { animationDirection: 'forward' });
  }

}
