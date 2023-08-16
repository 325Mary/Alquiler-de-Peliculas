import { Cliente } from "./cliente";
export class Pelicula {
    constructor(
        public titulo: string,
              public genero: string [],
              public duracion: number, 
              public año: number,
              public calificacion : number,
              public alquilada: boolean = false,
              public esEpica: boolean = false
    ) {
    }
    public getTitulo(): string{
      return this.titulo
    }
    public getGenero(): string []{
      return this.genero
    }
    public getDuracion(): number{
      return this.duracion
    }
    public getAño(): number{
      return this.año
    }
    public getCalificacion(): number{
      return this.calificacion
    }
    public getAlquilada(): boolean {
      return this.alquilada
    }
    public getesEpica(): boolean{
      return this.esEpica
    }
    public setTitulo(titulo: string){
      this.titulo = titulo
    }
    public setGenero(genero: string[]){
      this.genero= genero
    }
    public setDuracion(duracion: number){
      this.duracion = duracion
    }
    public setAño(año: number){
      this.año= año
    }
    public setCalificacion(calificacion: number){
      this.calificacion = calificacion
    }
    public setAlquilada(alquilada: boolean){
      this.alquilada = alquilada
    }
    public setEsEpica(esEpica: boolean){
      this.esEpica = esEpica
    }
  }