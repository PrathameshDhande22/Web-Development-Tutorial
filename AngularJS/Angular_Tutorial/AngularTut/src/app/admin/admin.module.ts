import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmincomponentComponent } from '../admincomponent/admincomponent.component';
import { AdminhomeComponent } from '../adminhome/adminhome.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [AdmincomponentComponent, AdminhomeComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
