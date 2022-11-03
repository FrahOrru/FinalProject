import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-task-creation-modal',
  templateUrl: './task-creation-modal.component.html',
  styleUrls: ['./task-creation-modal.component.css']
})
export class TaskCreationModalComponent implements OnInit {

  taskCreationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dialogRef: MatDialogRef<TaskCreationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { isLogedIn: boolean},) {

    this.taskCreationForm = this.formBuilder.group({
      title: [''],
      time: [new Date()],
      position: [''],
      description: [''],
    });
    
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.dialogRef.close({form: this.taskCreationForm});
  }

  onCancel() {
    this.dialogRef.close();
  }
}
