import { Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
	{
		path: 'home',
		title: 'Home',
		loadComponent: () => import('./pages/home/home.component')
	},
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: 'users',
		title: 'Usuarios',
		canActivate: [authGuard],
		loadComponent: () => import('./pages/users/users.component')
	},
	{
		path: 'login',
		title: 'Login',
		loadComponent: () => import('./pages/login/login.component')
	}
];
