import { CommonModule } from '@angular/common';
import { Component, DoCheck } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-appmenu',
  imports: [
    CommonModule,
    RouterLink,
    MatToolbarModule,
    MatButtonModule,
    MatIcon,
  ],
  templateUrl: './appmenu.component.html',
  styleUrl: './appmenu.component.css',
})
export class AppmenuComponent implements DoCheck {
  showmenu = true;

  constructor(private router: Router) {}

  ngDoCheck(): void {
    let currentUrl = this.router.url;

    if (currentUrl === '/login' || currentUrl === '/register') {
      this.showmenu = false;
    } else {
      this.showmenu = true;
    }
  }
}
