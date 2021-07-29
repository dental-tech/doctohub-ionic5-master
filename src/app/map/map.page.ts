import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
location: string = "n1";
  constructor(private modalController: ModalController, private route: Router) { }

  ngOnInit() {
  }

 doctorprofile() {
    this.modalController.dismiss();
    this.route.navigate(['./doctorprofile']);
  }    
 dismiss(){
   this.modalController.dismiss();
 }
}
