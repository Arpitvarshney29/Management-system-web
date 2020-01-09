import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthSigninComponent } from './auth-signin/auth-signin.component';
import { AuthSigninModule } from './auth-signin/auth-signin.module';
import { AuthSignupRoutingModule } from './auth-signup/auth-signup-routing.module';
import { AuthSigninRoutingModule } from './auth-signin/auth-signin-routing.module';
import { AuthSignupModule } from './auth-signup/auth-signup.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    AuthSignupRoutingModule,
    AuthSignupModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AuthSigninComponent]
})
export class AuthenticationModule { }
