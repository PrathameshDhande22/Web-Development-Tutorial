import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from '../adminhome/adminhome.component';
import { AdmincomponentComponent } from '../admincomponent/admincomponent.component';

// Defining the routes for children module component
const routes: Routes = [
  { path: 'home', component: AdminhomeComponent },
  { path: 'route', component: AdmincomponentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
