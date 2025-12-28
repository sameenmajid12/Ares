import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () => {
      return import('./pages/dashboard/dashboard').then((m) => m.Dashboard);
    },
  },
  {
    path: 'transactions',
    loadComponent: () => {
      return import('./pages/transactions/transactions').then((m) => m.Transactions);
    },
  },
  {
    path: 'market',
    loadComponent: () => {
      return import('./pages/market/market').then((m) => m.Market);
    },
  },
  {
    path: 'assets',
    loadComponent: () => {
      return import('./pages/assets/assets').then((m) => m.Assets);
    },
  },
];
