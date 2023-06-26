import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { BlogsComponent } from './blogs/blogs.component';

const routes: Routes = [  
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'blogs', component: BlogsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
