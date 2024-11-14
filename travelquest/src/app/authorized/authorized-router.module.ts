import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizedComponent } from './authorized.component';
import { HomeComponent } from './home/home.component';
import { ProfileListComponent } from './profile/profile-list/profile-list.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthorizedComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'profile',
        component: ProfileListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorizedRoutingModule {}
