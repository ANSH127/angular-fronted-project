import { Routes } from '@angular/router';
import { HomeComponent } from './MyComponents/home/home.component';
import { AddconfessionComponent } from './MyComponents/addconfession/addconfession.component';
import { MyconfessionComponent } from './MyComponents/myconfession/myconfession.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { SignupComponent } from './MyComponents/signup/signup.component';
import { ProfileComponent } from './MyComponents/profile/profile.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'addconfession', component: AddconfessionComponent },
    { path: 'myconfession', component: MyconfessionComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'profile', component: ProfileComponent },
    {path:'profile/:id', component: ProfileComponent}

];
