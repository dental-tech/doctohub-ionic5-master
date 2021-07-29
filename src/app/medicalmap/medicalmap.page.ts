import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-medicalmap',
  templateUrl: './medicalmap.page.html',
  styleUrls: ['./medicalmap.page.scss'],
})
export class MedicalmapPage implements OnInit {
location: string = "n1";
  constructor(private modalController: ModalController, private route: Router) { }

  ngOnInit() {
  }
    
 medicaldetail() {
    this.modalController.dismiss();
    this.route.navigate(['./medicaldetail']);
  }   
    
 dismiss(){
   this.modalController.dismiss();
 }
}
