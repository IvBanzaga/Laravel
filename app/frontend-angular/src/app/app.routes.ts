import { Routes } from '@angular/router';
import { Index } from './post/index';
import { Create } from './post/create/create';
import { Edit } from './post/edit/edit';

export const routes: Routes = [
  { path: '', component: Index},
  { path: 'create', component: Create },
  { path: ':postId/edit', component: Edit },
  { path: '**', redirectTo: '' } 
];
