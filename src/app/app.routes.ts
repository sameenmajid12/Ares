import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Transactions } from './pages/transactions/transactions';
import { Market } from './pages/market/market';
import { Assets } from './pages/assets/assets';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: Dashboard },
      {
        path: 'dashboard',
        component: Dashboard,
      },
      {
        path: 'transactions',
        component: Transactions,
      },
      {
        path: 'market',
        component: Market,
      },
      {
        path: 'assets',
        component: Assets,
      },
    ],
  },
  {
    path: '',
    component: AuthLayout,
    children: [
      { path: 'login', component: Login },
      {
        path: 'signup',
        component: Signup,
      },
    ],
  },
];
