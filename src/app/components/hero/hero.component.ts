import { Component, HostListener, OnDestroy, OnInit  } from '@angular/core';

@Component({
	selector: 'app-hero',
	templateUrl: './hero.component.html',
	styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
	windowWidth: number;

	constructor() {
		this.windowWidth = window.innerWidth;
	}

	ngOnInit(): void {
		this.handleResize();
	}

	@HostListener('window:resize', ['$event'])
	onResize(event: Event): void {
		this.handleResize();
	}

	handleResize(): void {
		this.windowWidth = window.innerWidth;
	}

	ngOnDestroy(): void {
		window.removeEventListener('resize', this.handleResize);
	}
}
