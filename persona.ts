export class Persona {
  constructor(public nombre: string, public apellido: string) {}

  public getNombre(): string {
    return this.nombre
  }
  public getApellido(): string{
    return this.apellido
  }
  public setNombre(nombre: string){
    this.nombre = nombre
  }
  public setApellido(apellido: string){
    this.apellido = apellido
  }

}

