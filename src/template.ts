
export function m(n: number): boolean {
 if (n > 5) {
   return true;
 } else {
   return false;
 }
}
/**
 * Clase que representa el patron Template Method 
 */
export abstract class AlgorithmTemplate {
  constructor(private numbers: number[]) {
    this.numbers = [];
  }
  public run() {
    this.filterList();
    this.reduceList();
    // this.mapList();
  }
  /**
   * Metodo abstracto que tiene que ser implementado por
   * las subclases
   */
  protected abstract reduceList(): number[];
  /**
   * Método filter para una lista de números
   */
  protected filterList(): number[] {
    let resul: number[] = [];
    this.numbers.forEach((elemnt) => {
      if (m(elemnt)) {
        resul.push(elemnt);
      }
    });
    return resul;
  }
  // /**
  //  * Méodo map para una lista de números
  //  */
  // protected mapList(): string[];
}