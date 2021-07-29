import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.page.html',
  styleUrls: ['./blogs.page.scss'],
})
export class BlogsPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  readblog() {
    this.route.navigate(['./readblog']);
  }  
}
