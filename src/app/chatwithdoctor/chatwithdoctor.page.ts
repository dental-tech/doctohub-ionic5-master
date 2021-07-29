import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatwithdoctor',
  templateUrl: './chatwithdoctor.page.html',
  styleUrls: ['./chatwithdoctor.page.scss'],
})
export class ChatwithdoctorPage implements OnInit {
Treatment: string = "v1";
  constructor() { }

  ngOnInit() {
  }

}
