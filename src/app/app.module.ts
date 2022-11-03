import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { VisionComponent } from './components/vision/vision.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DesktopSetupComponent } from './components/home/desktop-setup/desktop-setup.component';
import { NavComponent } from './components/home/nav/nav.component';
import { reducer } from './store/app.reducer';
import { StoreModule } from '@ngrx/store';
import { TaskComponent } from './components/task/task.component';
import { TaskCreationModalComponent } from './components/task-creation-modal/task-creation-modal.component';
import { FormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/app.effects';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { LoginRegistrationComponent } from './components/vision/login-registration/login-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VisionComponent,
    CalendarComponent,
    DesktopSetupComponent,
    NavComponent,
    TaskComponent,
    TaskCreationModalComponent,
    LoginRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CalendarModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule,
    EffectsModule.forRoot([AppEffects]),
    StoreModule.forRoot({app: reducer})
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
