import { Pelicula } from "./Alquiler";
import { SistemaAlquilerPeliculas } from "./Alquiler";

const datosPeliculas = [
    { titulo: "Pelicula A", genero: "Drama", año: 2020 },
    { titulo: "Pelicula B", genero: "Comedia", año: 2018 },
    { titulo: "Pelicula C", genero: "Acción", año: 2022 },
  ];
  const sistemaAlquiler = new SistemaAlquilerPeliculas(datosPeliculas);
  
  sistemaAlquiler.mostrarPeliculasDisponibles();
  
  // Ejemplo de alquiler (selecciona la película 2)
  sistemaAlquiler.alquilarPelicula(1);
  
  // Intento de alquiler de la misma película nuevamente
  sistemaAlquiler.alquilarPelicula(1);
  
  // Mostrar películas disponibles después del alquiler
  sistemaAlquiler.mostrarPeliculasDisponibles();