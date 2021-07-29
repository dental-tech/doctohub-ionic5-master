import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilterPage } from '../filter/filter.page';  
import { MapPage } from '../map/map.page';  
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-doctroslist',
  templateUrl: './doctroslist.page.html',
  styleUrls: ['./doctroslist.page.scss'],
})
export class DoctroslistPage implements OnInit {
 location: string = "n1";
  constructor(private route: Router,private modalController: ModalController) { }

  ngOnInit() {
  }

 doctorprofile() {
    this.route.navigate(['./doctorprofile']);
  }
 appointmentbook() {
    this.route.navigate(['./appointmentbook']);
  }
 filter(){
    this.modalController.create({component:FilterPage}).then((modalElement)=>
    {
      modalElement.present();
    }
    )
  }   
 map(){
    this.modalController.create({component:MapPage}).then((modalElement)=>
    {
      modalElement.present();
    }
    )
  }     
}
