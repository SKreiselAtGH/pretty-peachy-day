import { Component } from '@angular/core';

@Component({
  selector: 'app-side-top-nav',
  templateUrl: './side-top-nav.html',
  standalone: false,
  styleUrl: './side-top-nav.css'
})
export class SideTopNav {
  showSideNav: boolean = false;

  toggleSideNav() {
    this.showSideNav = !this.showSideNav;
  }

}
