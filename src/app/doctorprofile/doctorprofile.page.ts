import { Component, OnInit } from '@angular/core';
import { ScrollDetail } from '@ionic/core';  
import { Router } from '@angular/router';
@Component({
  selector: 'app-doctorprofile',
  templateUrl: './doctorprofile.page.html',
  styleUrls: ['./doctorprofile.page.scss'],
})
export class DoctorprofilePage implements OnInit {
  favorite_icon = false;
  tab: string = "about";
  showToolbar = false;  
 Short: string = "1";     
  constructor(private route: Router) { }

  ngOnInit() {
  }

 onScroll($event: CustomEvent<ScrollDetail>) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 150;
    }
  }    
toggleSaveIcon1() {
    this.favorite_icon = !this.favorite_icon;
  }
  

 book_appointment_now() {
    this.route.navigate(['./appointmentbook']);
  }
 give_feedback() {
    this.route.navigate(['./addfeedback']);
  }
}

