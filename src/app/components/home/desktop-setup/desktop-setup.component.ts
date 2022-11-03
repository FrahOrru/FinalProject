import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-desktop-setup',
  templateUrl: './desktop-setup.component.svg',
  styleUrls: ['./desktop-setup.component.css']
})
export class DesktopSetupComponent implements OnInit {

  title = "CodeSandbox";
  fill = "#3C3C3B";
  computerDesktopFill = "#999999";

  ngOnInit() {}

  constructor(){}

  onPhoneScreenClicked() {
    this.fill === `#fff` ? (this.fill = "#3C3C3B") : (this.fill = "#fff");
  }

  onComputerScreenClicked() {
    this.computerDesktopFill === `#fff`
      ? (this.computerDesktopFill = "#999999")
      : (this.computerDesktopFill = "#fff");
  }

  onClickPencil() {
    const tl =  gsap.timeline();

    tl.to(".pencile", { x: 40, y: -10, duration: 0.8 });
    tl.to(".pencile2", { x: 40, y: -10, duration: 1 });
    tl.to(".pencile2", { x: 0, y: 0, duration: 1 });
    tl.to(".pencile", { x: 0, y: 0, duration: 1.3 });
  }

  onPlantCLick() {
    const tl =  gsap.timeline();

    tl.fromTo(".plant", 0.01, { x: -2 }, { x: 2, clearProps: "x", repeat: 20 });
  }

  onCupClick(target: any) {
  }

  onCalendarClick(){
    const tl =  gsap.timeline();

    tl.to(".calendar", { x: 50, y: -50, duration: 0.8 });
    tl.to(".calendar", { x: 0, y: 0, duration: 0.8 });
  }
}
