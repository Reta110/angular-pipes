import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'pipes';

	nombre = 'Rafael';
	nombre2 = 'rafAel enrique toRrealba ArenaS';

	array = [1,2,3,4,5,6,7,8,9,10];

	pi = Math.PI;

	a:number = 0.234;

	salario = 1234.5;

	heroe = {
		nombre: 'Logan',
		clave: "Wolverine",
		edad: 500,
		direccion: {
			calle: "Primera calle",
			numero: 353
		}
	};

	valorDePromesa = new Promise( ( resolve, reject) => {

		setTimeout( () => resolve('LLego la data'), 3500);

	});


	fecha = new Date();

	video = 'hx0xiryrRjk';

	activated:boolean = true;

}