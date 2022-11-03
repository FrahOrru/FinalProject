import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onMainClicked() {
    let tl = gsap.timeline();
    document.querySelectorAll('.nav-element').forEach(elem => elem.classList.toggle('show-elements'))

    tl.to(".vision", {x: 20, ease:Bounce.easeOut, duration: 2})
  }

}
