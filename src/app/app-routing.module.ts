import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from 'src/app/core-module/not-found/not-found.component';
import { LoginPageComponent } from 'src/app/core-module/login-page/login-page.component';
import {
    ItemsListComponent
} from 'src/app/core-module/cource-list/components/items-list/items-list.component';
import { AuthGuard } from './commons/guards/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginPageComponent },
    { path: 'list', component: ItemsListComponent, canActivate: [AuthGuard]},
    { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
