import { Routes } from '@angular/router';
import { ListClient } from './components/list-client/list-client';
import { FormClient } from './components/form-client/form-client';
import { PageClient } from './components/page-client/page-client';

export const routes: Routes = [
    {
        path: 'list',
        component: ListClient
    },
    {
        path: 'page',
        component: PageClient
    }
];
