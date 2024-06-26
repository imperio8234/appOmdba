"use client";
import { MovieList } from "@/components/MovieList";
import { SearchBar } from "@/components/SearchBar";
import paginasExistentes from "@/util/paginasExistentes";
import { Pagination, Stack } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {
  // estados de la aplicacion 
  const [peliculas, setPeliculas] = useState([]);
  const [nombrePelicula, setNombrePelicula] = useState("");
  const [cargando, setCargando] = useState(false);
  const [paginas, setPaginas] = useState(1);
  const [getPage, setGetPage] = useState(1);


  // funcion para solicitar la informacion de la api  
 async function optenerInformacion() {
    
  // este codigo sirve para comprobar si existen peliculas para buscar y no nos surja un error 
     if (!nombrePelicula) {
      return;
     }
  // se activa el estado de carga de informacion 
  setCargando(true);

  try {
    //realizamos la peticion por medio de fetch integrando la url con el estado que nos proporciona la pelicula
  const optenerPeliculas = await fetch(`https://www.omdbapi.com/?s=${nombrePelicula}&page=${getPage}&apikey=86ed16c4`,{
    method: "GET"
  })
  
  // transformamos a json la respuesta optenida 
  const peliculasOptenidas = await optenerPeliculas.json();
  //verificamos la respuesta optenida en caso de que sea verdadera o falsa para proceder a manejar los datos 
  
  if (peliculasOptenidas.Response == 'True') {
   
    // insertamos los datos en el estado para procesarlos
    setPeliculas(peliculasOptenidas.Search);
    setPaginas(paginasExistentes(parseInt(peliculasOptenidas.totalResults)));
  } else { 
    alert("no existen peliculas");
    }
  // se termina la carga de la informacion 
  setCargando(false);
    
  } catch (error) {
    alert(error)
  }
  }// termina la funcion de solicitud 


   // optener el numero de pagina
   function cambioDePagina(event, value) {
     setGetPage(value)
   }
  

   // detecta cuando la pagina a cambiado 
   useEffect(() =>{
    optenerInformacion();
   }, [getPage]);

    // comprobar si el nombre de la pelicula esta en blanco 
   useEffect(() => {
     if (nombrePelicula.length < 1) {
        setGetPage(1);
        setPeliculas([])
     }
   }, [nombrePelicula])

   
  return (
    <main className="w-full h-screen">
     <div className="bg-white w-full h-1/4 flex flex-col">
        <div className="w-full bg-neutral-800 h-9 flex justify-center text-blue-300 rounded-b-lg">
           <p className="text-center">consulta sobre tus peliculas favoritas aqui </p>
        </div>
        {/**barra de busqueda  */}
        <SearchBar setNombrePelicula={setNombrePelicula} optenerInformacion={optenerInformacion} cargando={cargando} />
        {
          //mensaje de advertecia para dar a conocer si hay palabras de busqueda 
        !nombrePelicula&&<p className="mx-auto">ingresa un nombre para empesar</p>
        }
        <Stack spacing={2}>
          <Pagination count={paginas} page={getPage} onChange={cambioDePagina}/>
        </Stack>
     </div>
     <hr />
     {/**campo para mostrar la lista de peiculas encontradas  */}
    <MovieList cargando={cargando} peliculas={peliculas}/>
    </main>
  );
}
