import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [],
  template: ` <p>contact works!</p> `,
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  routeValue: any;
  submenu: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeValue = this.route.snapshot.paramMap.get('id');
    this.submenu = this.route.snapshot.paramMap.get('submenu');
    console.log(this.submenu, this.routeValue);
  }
}
