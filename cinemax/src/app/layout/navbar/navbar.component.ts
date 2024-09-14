import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  navbg: any;

  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  searchMovie(texto:string) {

    texto.trim();
    if (texto.length === 0) {
      return;
    }

    this.router.navigate(['../search', texto]);

  }

  @HostListener('document:scroll') scrollver() {
    console.log(document.body.scrollTop, 'scrolllenght#');

    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.navbg = {
        'background-color': '#1A2232',
      };
    } else {
      this.navbg = {};
    }
  }


}
