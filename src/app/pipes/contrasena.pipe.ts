import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

	transform(value: string, activated: boolean): any {
		
		if(activated){
			let valueAux = value.split('');
			let string = "";

			for(let i = 0; i < valueAux.length; i++){
				string+='*';
			}

			value = string;
		}

		return value;
	}

}
