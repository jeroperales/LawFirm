import { Routes } from '@angular/router';
import { ListClient } from './components/list-client/list-client';
import { AddClient } from './components/add-client/add-client';
import { FormClient } from './components/form-client/form-client';

export const routes: Routes = [
    {
        path: 'list',
        component: ListClient
    },
    {
        path: 'add',
        component: AddClient
    },
    {
        path: 'form',
        component: FormClient
    }
];
