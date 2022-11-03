import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import * as AppActions from '../../store/app.actions';
import { Store } from '@ngrx/store';
import { TaskI } from '../../interfaces/task.interface';
import { TaskCreationModalComponent } from '../task-creation-modal/task-creation-modal.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private dialog: MatDialog, private store: Store) { }

  ngOnInit(): void {
  }

  onEditClick() {
    let dialogRef = this.dialog.open(TaskCreationModalComponent, {
      height: '450px',
      width: '600px',
      data: {
        isLogedIn: true
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        let form = {
          userId: 1,
          ...result.form.value
        } as TaskI


        this.store.dispatch(AppActions.createTask({task: form}))
      }
    });
  }

}
