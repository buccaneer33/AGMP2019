import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from 'src/app/core-module/not-found/not-found.component';
import { LoginPageComponent } from './auth/components/login-page/login-page.component';
import {
    ItemsListComponent
} from 'src/app/core-module/cource-list/components/items-list/items-list.component';
import { ItemComponent } from './core-module/cource-list/components/item/item.component';
import { ListComponent } from './core-module/cource-list/components/list/list.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginPageComponent },
    { path: 'list', component: ListComponent, data: {breadcrumb: 'List'},
        canActivate: [AuthGuard], children: [

        {path: '', component: ItemsListComponent},
        {path: 'item/:id', component: ItemComponent,
            data: {breadcrumb: 'item'}},
        {path: 'new', component: ItemComponent,
            data: {breadcrumb: 'new cource'}}

        ]
    },
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
