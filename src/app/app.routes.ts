import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SuccessComponent } from './components/success/success.component';

export const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'success', component: SuccessComponent},
];
