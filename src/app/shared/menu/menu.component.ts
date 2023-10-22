import { Component } from '@angular/core';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

	public topMenu = [
		"Personas", "Empresas", "Información a Abonados y Usuarios"
	];

	public mainMenu = [
		"Celulares", "Hogar", "Plan Móvil", "Entretenimiento", "Atención al cliente"
	];

	public mainIcons = [
		{
			icon: "assets/images/nav/finder-icon.png",
			name: "Search"
		},
		{
			icon: "assets/images/nav/track-icon.png",
			name: "Orders"
		},
		{
			icon: "assets/images/nav/notifications-icon.png",
			name: "Notifications"
		}
	];

	public isMenuOpen = false

    toggleMenu() {
		this.isMenuOpen = !this.isMenuOpen;
	}
}
