import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-tests',
  templateUrl: './tests.page.html',
  styleUrls: ['./tests.page.scss'],
})
export class TestsPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }


 dismiss(){
   this.modalController.dismiss();
 }
}
