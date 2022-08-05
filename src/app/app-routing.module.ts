import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from "./user-login/user-login.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";

const routes: Routes = [
  { path: 'login', component: UserLoginComponent },
  { path: 'user-profile/:id', component: UserProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
