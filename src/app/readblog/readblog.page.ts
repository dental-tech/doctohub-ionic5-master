import { Component, OnInit } from '@angular/core';
import { ScrollDetail } from '@ionic/core';  

@Component({
  selector: 'app-readblog',
  templateUrl: './readblog.page.html',
  styleUrls: ['./readblog.page.scss'],
})
export class ReadblogPage implements OnInit {
  showToolbar = false;  
  constructor() { }

  ngOnInit() {
  }
    
 onScroll($event: CustomEvent<ScrollDetail>) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 150;
    }
  }   
}
