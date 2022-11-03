import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TaskCreationModalComponent } from '../task-creation-modal/task-creation-modal.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import * as AppActions from '../../store/app.actions';
import { Store, Action } from '@ngrx/store';
import { getTaskFilteredSelector, getUserSelector } from 'src/app/store/app.selector';
import { UserI } from '../../interfaces/user.interface';
import { TaskI, TaskType } from '../../interfaces/task.interface';
import { Actions, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';

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

  currentUser$ = new Observable<UserI>();
  alltaskMonth$ = new Observable<TaskI[]>();
  currentUserId: number = 0;

  constructor(private dialog: MatDialog, private store: Store, private actions$: Actions) {
    this.currentUser$ = this.store.select(getUserSelector);
    this.alltaskMonth$ = this.store.select(getTaskFilteredSelector);
  }

  ngOnInit(): void {
    this.getTasksForMonth();
    this.getDaysInMonth(this.year, this.month)
    this.getWeeks();

    this.currentUser$.subscribe((user: UserI) => {
      if(user && user.id) {
        this.currentUserId = user.id;
      }
    })
  }

  onDateClicked() {
    let dialogRef = this.dialog.open(TaskCreationModalComponent, {
      height: '450px',
      width: '600px',
      data: {
        isLogedIn: this.currentUserId !== 0 ? true : false 
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        let form = {
          userId: 1,
          type: TaskType.APPOINTMENT,
          ...result.form.value
        } as TaskI


        this.store.dispatch(AppActions.createTask({task: form}))
      }
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

    for(let i = 0; i <= this.fullCalendarCells.length; i += 7) {
      this.calendarCells.push(this.fullCalendarCells.slice(i, i + 7))
    }

    this.calendarcells2.next(this.calendarCells);
  }

  getTasksForMonth() {
    this.store.dispatch(AppActions.getAllTaskFilter({
      filter: { 
         userId: 1,
         dateFrom: new Date(this.month, this.year, 0),
         dateTo: new Date(this.month + 1, this.year, 0)
       }
     }));
  }
}
