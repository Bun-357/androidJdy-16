import { Component, NgZone, OnInit } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ble-home',
  templateUrl: './ble-home.page.html',
  styleUrls: ['./ble-home.page.scss'],
})
export class BleHomePage{

  devices: any[] = [];
  statusMessage: string;

  constructor(public navCtrl: NavController,
              private toastCtrl: ToastController,
              private ble: BLE,
              private ngZone: NgZone) {
  }


  ionViewDidEnter() {
    console.log('ionViewDidEnter');
    //this.scan();
  }

  scan() {
    this.setStatus('Scanning for Bluetooth LE Devices');
    this.devices = [];  // clear list

    this.ble.scan([], 5).subscribe(
      device => this.onDeviceDiscovered(device),
      error => this.scanError(error)
    );

    setTimeout(this.setStatus.bind(this), 5000, 'Scan complete');
  }

  onDeviceDiscovered(device) {
    console.log('Discovered ' + JSON.stringify(device, null, 2));
    this.ngZone.run(() => {
      this.devices.push(device);
    });
  }

  // If location permission is denied, you'll end up here
  scanError(error) {
    this.setStatus('Error ' + error);
    // let toast = this.toastCtrl.create({
    //   message: 'Error scanning for Bluetooth low energy devices',
    //   position: 'middle',
    //   duration: 5000
    // });
    // (await toast).present();
  }

  setStatus(message) {
    console.log(message);
    this.ngZone.run(() => {
      this.statusMessage = message;
    });
  }

}
