import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterOutlet, RouterLink } from '@angular/router';
import { OptionInterface } from '../shared/interfaces';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrl: './navigation.component.scss',
	standalone: true,
	imports: [
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatListModule,
		MatIconModule,
		AsyncPipe,
		RouterOutlet,
		RouterLink,
		CommonModule,
		MatIconModule,
		MatTooltipModule
	]
})
export class NavigationComponent {
	private breakpointObserver = inject(BreakpointObserver);
	menuOption: OptionInterface[] = [];

	constructor() {
		this.menuOption.push({
			idoption: 1,
			name: 'Inicio',
			icon: 'home',
			rute: 'home'
		});
		this.menuOption.push({
			idoption: 2,
			name: 'Usuarios',
			icon: 'person',
			rute: 'users'
		});
		this.menuOption.push({
			idoption: 3,
			name: 'Login',
			icon: 'login',
			rute: 'login'
		});
	}

	isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
		map((result) => result.matches),
		shareReplay()
	);
}
