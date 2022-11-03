import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-task-creation-modal',
  templateUrl: './task-creation-modal.component.html',
  styleUrls: ['./task-creation-modal.component.css']
})
export class TaskCreationModalComponent implements OnInit {

  taskCreationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dialogRef: MatDialogRef<TaskCreationModalComponent>) {
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
  }

  onCancel() {
    this.dialogRef.close();
  }
}
