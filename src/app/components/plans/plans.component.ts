import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-plans',
	templateUrl: './plans.component.html',
	styleUrls: ['./plans.component.scss']
})

export class PlansComponent implements OnInit{
	data!: any[];

  	constructor(private http: HttpClient) {}

	ngOnInit(): void {
		this.http.get('assets/data/plans.json').subscribe(
		(jsonData: any) => {
			this.data = jsonData;
			console.log('DATA', this.data);
		},
		(error) => {
			console.error('Error al cargar el JSON:', error);
			// Puedes mostrar un mensaje de error al usuario aquí
		}
		);
	}
}
