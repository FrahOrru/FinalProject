import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginRegistrationComponent } from './login-registration/login-registration.component';
import { Store } from '@ngrx/store';
import * as AppActions from '../../store/app.actions';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.css']
})
export class VisionComponent implements OnInit {

  constructor(private dialog: MatDialog, private store: Store) { }

  ngOnInit(): void {
  }

  onShowPersonalPlan() {
    let dialogRef = this.dialog.open(LoginRegistrationComponent, {
      height: '450px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.store.dispatch(AppActions.createUser({...result.value}))
      }
    });
  }

}
