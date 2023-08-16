import { Pelicula } from "./pelicula";
import { SistemaAlquilerPeliculas } from "./Alquiler";
import { Cliente } from "./cliente";



const datosPeliculas = [
  { titulo: "Pelicula A", genero: ["Accion", "Terror"], año: 2020, duracion: 150, calificacion: 2  },
  { titulo: "Pelicula B", genero: ["Comedia"], año: 2018, duracion: 210, calificacion: 10 },
  { titulo: "Pelicula C", genero: ["Accion"], año: 2022, duracion: 120, calificacion: 2 },
]

const sistemaAlquiler = new SistemaAlquilerPeliculas(datosPeliculas)
const cliente1 = new  Cliente ("Juan", "perez")

sistemaAlquiler.mostrarSimilitudesPeliculas()

sistemaAlquiler.mostrarPeliculasDisponibles();

 sistemaAlquiler.alquilarPelicula(0, cliente1 );


sistemaAlquiler.alquilarPelicula(0, cliente1);


sistemaAlquiler.mostrarPeliculasDisponibles();


