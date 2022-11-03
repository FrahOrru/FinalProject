import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginRegistrationComponent } from './login-registration/login-registration.component';
import { Store } from '@ngrx/store';
import * as AppActions from '../../store/app.actions';
import { getUserSelector } from 'src/app/store/app.selector';
import { UserI } from '../../interfaces/user.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.css']
})
export class VisionComponent implements OnInit {
  currentUser$ = new Observable<UserI>();

  constructor(private dialog: MatDialog, private store: Store) {
    this.currentUser$ = this.store.select(getUserSelector);
  }

  ngOnInit(): void {
  }

  onShowPersonalPlan() {
    let dialogRef = this.dialog.open(LoginRegistrationComponent, {
      height: '450px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        const user: UserI = {...result.form.value};

        this.store.dispatch(AppActions.createUser({user}))
      }
    });
  }

}
