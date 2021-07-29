import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lab',
  templateUrl: './lab.page.html',
  styleUrls: ['./lab.page.scss'],
})
export class LabPage implements OnInit {
location: string = "n1";
  constructor(private route: Router) { }

  ngOnInit() {
  }


 labdetails() {
    this.route.navigate(['./labdetails']);
  }
    
}
