import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingersComponent } from './singers/singers.component';
import { AboutComponent } from './about/about.component';
import { SingerDetailComponent } from './singer-detail/singer-detail.component';
import { AdminComponent }   from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SingersComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'singers/:id',
    component: SingerDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
