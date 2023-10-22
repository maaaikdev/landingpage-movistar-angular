import { Component, Input, OnInit, HostListener } from '@angular/core';

@Component({
	selector: 'app-plans-cards',
	templateUrl: './plans-cards.component.html',
	styleUrls: ['./plans-cards.component.scss']
})
export class PlansCardsComponent implements OnInit {
	@Input() plan: any; // Define un tipo de dato adecuado para plan
	divVisible: boolean = false;
	windowWidth: number = window.innerWidth;
  
	toggleDiv() {
	  	this.divVisible = !this.divVisible;
	}
  
	@HostListener('window:resize', ['$event'])
	onResize(event: Event) {
		this.windowWidth = window.innerWidth;
		if (this.windowWidth < 768) {
			this.divVisible = false;
		} else {
			this.divVisible = true;
		}
	}
  
	ngOnInit() {
	  	this.onResize(new Event('resize'));
	}
}
