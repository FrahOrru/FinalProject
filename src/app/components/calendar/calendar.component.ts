import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TaskCreationModalComponent } from '../task-creation-modal/task-creation-modal.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  
  date = new Date();
  weekDays: String[] = [
    'Ma',
    'Tu',
    'We',
    'Th',
    'Fr',
    'Sa',
    'Su'
  ]

  dayCurrentMonth: number = 0;
  month: number = this.date.getMonth() + 1;
  year: number = this.date.getFullYear();
  fullCalendarCells: string[] = [];
  calendarCells: string[][] = [];

  calendarcells2 = new BehaviorSubject(this.calendarCells);

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getDaysInMonth(this.year, this.month)
    this.getWeeks();
  }

  onDateClicked() {
    let dialogRef = this.dialog.open(TaskCreationModalComponent, {
      height: '450px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed with result ', result);
    });
  }

  onNextMonth() {
    if(this.month !== 12) {
      this.month += 1;
    } else {
      this.month = 1;
      this.year += 1;
    }

    this.date = new Date(this.year, this.month, 0)

    this.fullCalendarCells = [];
    this.calendarCells = [];

    this.getDaysInMonth(this.year, this.month);
    this.getWeeks();    
  }

  onPrevMonth() {
    if(this.month !== 12) {
      this.month -= 1;
    } else {
      this.month = 12;
      this.year -= 1;
    }

    this.date = new Date(this.year, this.month, 0)

    this.fullCalendarCells = [];
    this.calendarCells = [];

    this.getDaysInMonth(this.year, this.month);
    this.getWeeks();  
  }  

  getDaysInMonth(year: number, month: number) {
    this.dayCurrentMonth = new Date(year, month, 0).getDate();
  }

  getWeeks() {
    let firstDayOfMonth = new Date(this.year, this.month, 1);

    for(let i = 1; i <= (firstDayOfMonth.getDay() - 1); i++) {
      this.fullCalendarCells.push("")
    }

    for(let i = 0; i < this.dayCurrentMonth; i++) {
      this.fullCalendarCells.push((i + 1).toString())
    }

    for(let i = 0; i < (36 - this.fullCalendarCells.length); i++) {
      this.fullCalendarCells.push("");
    }

    console.log(this.fullCalendarCells.length)

    for(let i = 0; i <= this.fullCalendarCells.length; i += 7) {
      this.calendarCells.push(this.fullCalendarCells.slice(i, i + 7))
    }

    this.calendarcells2.next(this.calendarCells);
  }
}
