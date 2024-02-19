import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  constructor(private router: Router) {}
  inApp = false;
  isShowing = false;
  sidenavWidth = 4;
  activeMenu: any = '';
  hideSubmenuIcon = true;
  increase() {
    this.sidenavWidth = 15;
    this.isShowing = true;
    this.hideSubmenuIcon = false;
  }
  decrease() {
    this.sidenavWidth = 4;
    this.isShowing = false;
    this.hideSubmenuIcon = true;
  }
  ngOnInit(): void {}
  menuselected(d: any) {
    this.activeMenu = d;
  }
  menuClick(event: string) {
    this.router.navigate([event]);
  }
}
