import { Component, OnInit } from '@angular/core';
import { TestsPage } from '../tests/tests.page';   
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-labdetails',
  templateUrl: './labdetails.page.html',
  styleUrls: ['./labdetails.page.scss'],
})
export class LabdetailsPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

 search(){
    this.modalController.create({component:TestsPage}).then((modalElement)=>
    {
      modalElement.present();
    }
    )
  } 
}
