import { Routes } from '@angular/router';
import { Create } from './post/create/create';
import { Edit } from './post/edit/edit';
import { Index } from './post/index';
import { Show } from './post/show/show';

export const routes: Routes = [
  /* TODO: Rutas de la aplicación para las vistas de posts */
  { path: '', component: Index},
  { path: 'create', component: Create },
  { path: ':postId/edit', component: Edit },
  { path: ':postId', component: Show },
  { path: '**', redirectTo: '' } 
];
