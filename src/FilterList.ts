import { AlgorithmTemplate, m } from './template';
/**
 * Clase que filtra una lista de números
 */
export class FilterMapAddReduce extends AlgorithmTemplate { 
	constructor(private numbersList: number[]) {
		super(numbersList);
	}
	/**
	 * Devuelve la suma de la lista de números 
	 * @returns array de números
	 */
	protected reduceList(): number[] {
		let resul: number[] = [];
    this.numbersList.forEach((elemnt) => {
			resul.push(elemnt+elemnt);
    });
    return resul;
	}
	protected filterList(): number[] {
    let resul: number[] = [];
    this.numbersList.forEach((elemnt) => {
      if (m(elemnt)) {
        resul.push(elemnt);
      }
    });
    return resul;
	}
}