import { Persona } from "./persona";


export class Cliente extends Persona {
  constructor(nombre: string, apellido: string) {
      super(nombre, apellido);
  }
}