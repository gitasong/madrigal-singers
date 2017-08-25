import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingersComponent } from './singers/singers.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SingersComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
