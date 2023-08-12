export class Pelicula {
    constructor(
      public titulo: string,
      public genero: string,
      public año: number,
      public alquilada: boolean = false
    ) {}
  }
  
export class SistemaAlquilerPeliculas {
    private peliculas: Pelicula[] = [];
  
    constructor(datosPeliculas: { titulo: string; genero: string; año: number }[]) {
      this.peliculas = datosPeliculas.map((datos) => new Pelicula(datos.titulo, datos.genero, datos.año));
    }
  
    mostrarPeliculasDisponibles() {
      console.log("Peliculas disponibles para alquiler:");
      this.peliculas.forEach((pelicula, indice) => {
        if (!pelicula.alquilada) {
          console.log(`${indice + 1}. ${pelicula.titulo} (${pelicula.año}), Género: ${pelicula.genero}`);
        }
      });
    }
  
    alquilarPelicula(indicePelicula: number) {
      if (indicePelicula < 0 || indicePelicula >= this.peliculas.length) {
        console.log("Opción inválida.");
        return;
      }
  
      const peliculaSeleccionada = this.peliculas[indicePelicula];
      if (peliculaSeleccionada.alquilada) {
        console.log("Esta película ya ha sido alquilada.");
        return;
      }
  
      peliculaSeleccionada.alquilada = true;
      console.log(`Has alquilado la película "${peliculaSeleccionada.titulo}". ¡Disfrútala!`);
    }
  }
  