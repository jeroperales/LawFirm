import { Routes } from '@angular/router';
import { ListClient } from './components/list-client/list-client';
import { FormClient } from './components/form-client/form-client';
import { PageClient } from './components/page-client/page-client';
import { FormCase } from './components/case/form-case/form-case';

export const routes: Routes = [
    {
        path: 'clients',
        component: ListClient
    },
    {
        path: 'add',
        component: PageClient
    },
    {
        path: 'add-case',
        component: FormCase
    }
    
];
