import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicalmapPage } from '../medicalmap/medicalmap.page';  
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-medical',
  templateUrl: './medical.page.html',
  styleUrls: ['./medical.page.scss'],
})
export class MedicalPage implements OnInit {
location: string = "n1";
  constructor(private route: Router, private modalController: ModalController) { }

  ngOnInit() {
  }

 medicaldetail() {
    this.route.navigate(['./medicaldetail']);
  }
  
 medicalmap(){
    this.modalController.create({component:MedicalmapPage}).then((modalElement)=>
    {
      modalElement.present();
    }
    )
  }  
}
