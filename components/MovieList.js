import { CircularProgress, Modal } from "@mui/material"
import CardPelicula from "./cardPelicula"
import { useState } from "react";
import MovieDetails from "./movieDescription";

export const MovieList = ({peliculas, cargando}) => {
   
    // estados del componente 
    const [codigoPelicula, setCodigoPelicula] = useState(0);
    const [descriPelicula, setDescriPelicula] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [cargandoInfo, setCargandoInfo] = useState(false);

    // se pide la informacion completa de la pelicula
   async function infoPelicula (code, img) {
    // se muestra el modal 
    setShowModal(true);

    // cargando informacion 
    setCargandoInfo(true)
    try {
       // se utiliza fetch para la peticion 
      const descripcionPeli = await fetch(`https://www.omdbapi.com/?i=${code}&apikey=86ed16c4`, {
       method :"GET"
      });

      // se convierte a json la informacion 
      const descripcionPeliOptenida = await descripcionPeli.json();
      // se guada la descripcion de la pelicula
      setDescriPelicula(descripcionPeliOptenida);

      // final de la  barra de proceso de carga de la informacion 
      setCargandoInfo(false)
    } catch (error) {
      alert(error)
    }
  }// final de la funcion de peticion de la informacion de la pelicula 
  return (
    <div className=" w-full bg-gray-100 h-3/4 flex gap-8 p-4 flex-wrap overflow-y-scroll justify-center">
       
       {
        // targeta la cual muestra la informacion principal de las peliculas 
         !cargando?
         peliculas.map((pelicula, index) =>{
          return (
         <CardPelicula key={index} setShowModal={setShowModal}  infoPelicula={infoPelicula} codigo={pelicula.imdbID} titulo={pelicula.Title} imagen={pelicula.Poster}  año={pelicula.Year} tipo={pelicula.Type}></CardPelicula>   
          )

         })
         
         :<CircularProgress />
       }
          {
            /** modal para observar los detalles de la pelicula */
            showModal
            &&
            <div onClick={() => {setShowModal(false), setDescriPelicula("")}} className="z-40 w-screen bg-white  absolute top-0 p-10">
              {!cargandoInfo?<MovieDetails movie={descriPelicula} />:<CircularProgress />}
            </div>
          }
       
       </div>
  )
}
