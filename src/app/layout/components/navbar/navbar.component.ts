import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  imageUrl = "assets/images/logo1.png";
  
  constructor(private route: ActivatedRoute, private viewportScroller: ViewportScroller) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        this.scrollToAnchor(fragment);
      }
    });
  }
  
  scrollToAnchor(fragment: string): void {
    this.viewportScroller.scrollToAnchor(fragment);
  }
}
