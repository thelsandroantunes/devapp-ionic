import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'perfil',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../perfil/perfil.module').then(m => m.PerfilPageModule)
          }
        ]
      },
      {
        path: 'obs',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../obs/obs.module').then(m => m.ObsPageModule)
          }
        ]
      },
      {
        path: 'filtro',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../filtro/filtro.module').then(m => m.FiltroPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'tabs',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
