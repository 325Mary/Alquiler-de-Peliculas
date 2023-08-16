import { Pelicula } from "./pelicula";
import { Cliente } from "./cliente";



export class SistemaAlquilerPeliculas {
    private peliculas: Pelicula[] = []
   
  
    constructor(datosPeliculas: { titulo: string; genero: string []; duracion: number; año: number; calificacion: number}[]) {
      this.peliculas = datosPeliculas.map((datos) => new Pelicula(datos.titulo, datos.genero, datos.duracion, datos.año, datos.calificacion));
    }
    
    
    private calcularValoracion(calificacion: number): string {
      if (calificacion >= 0 && calificacion <= 2) {
          return "Muy mala";
      } 
      else if (calificacion > 2 && calificacion <= 5) {
          
         
  return "Mala";
      } else if (calificacion > 5 && calificacion <= 7) {
          return "Regular";
      } else if (calificacion > 7 && calificacion <= 8) {
          return "Buena";
      } else if (calificacion > 8 && calificacion <= 10) {
          return "Excelente";
      } else {
          return "Valoración inválida";
      }
    
  } 
  private esPeliculaEpica(duracion: number): boolean {
    return duracion >= 180; // 180 minutes = 3 hours
}


mostrarPeliculasDisponibles() {
      console.log("Peliculas disponibles para alquiler:");
      this.peliculas.forEach((pelicula, indice) => {
        if (!pelicula.alquilada) {
          const valoracion = this.calcularValoracion(pelicula.calificacion);
          const esEpica = this.esPeliculaEpica(pelicula.duracion) 
          console.log(`${indice + 1}. ${pelicula.titulo} (${pelicula.año}), Género: ${pelicula.genero}, ${"Duracion: " + pelicula.duracion}, ${"Calificacion: "+ pelicula.calificacion}, ${valoracion}, ${"Es epica: "+esEpica}`);
        }

      });
    }
  
    
    alquilarPelicula(indicePelicula: number,cliente: Cliente) {
      if (indicePelicula < 0 || indicePelicula >= this.peliculas.length) {
        console.log("Opción inválida.");
        return;
      }
  
      const peliculaSeleccionada = this.peliculas[indicePelicula];
      if (peliculaSeleccionada.alquilada) {
        // console.log("Esta película ya ha sido alquilada.");
        // console.log(`Cliente ${cliente} alquiló la película "${peliculaSeleccionada.titulo}". ¡Disfrútala!`);
        console.log(`Cliente ${cliente.nombre} ${cliente.apellido} ya alquiló la película "${peliculaSeleccionada.titulo}".`);
      
       return;
      }
  
      peliculaSeleccionada.alquilada = true;
      console.log(`Has alquilado la película "${peliculaSeleccionada.titulo}". ¡Disfrútala!`);
    }
    
    private esSimilar(peliculaA: Pelicula, peliculaB: Pelicula): boolean {
      const generosComunes = peliculaA.genero.some(generoA => peliculaB.genero.includes(generoA));
      return generosComunes && peliculaA.calificacion === peliculaB.calificacion;
  }

  
 
mostrarSimilitudesPeliculas() {
      console.log("Similitudes entre películas:");
      for (let i = 0; i < this.peliculas.length; i++) {
          for (let j = i + 1; j < this.peliculas.length; j++) {
              const peliculaA = this.peliculas[i];
              const peliculaB = this.peliculas[j];
              const similar = this.esSimilar(peliculaA, peliculaB);
              console.log(`¿"${peliculaA.titulo}" es similar a "${peliculaB.titulo}"? ${similar}`);
          }
      }
  }

  
}
   
