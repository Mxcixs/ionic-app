import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersPage } from './users.page';

const routes: Routes = [
  {
    path: '',
    component: UsersPage,
  },
  {
    path: 'profile/:id',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfilePageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersPageRoutingModule {}
