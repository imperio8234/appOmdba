import React from "react";
import Image from "next/image";
import { Typography } from "@mui/material";


function CardPelicula({titulo, imagen, año, tipo, codigo, infoPelicula}) {
   
  return (
   <div className="w-72 h-56 rounded-md bg-white shadow-lg flex flex-row">
    <Image 
    src={imagen== "N/A"?"/public/N.jpg":imagen} 
    width={130}
    height={100}
    alt={titulo }/>
    
    <div className="flex justify-center flex-col w-full p-1 font-ligh toverflow-hidden">
      <div className="w-full  h-4/5 flex flex-col gap-3 ">
       <h1 className=" text-xl text-ellipsis"> {titulo}</h1>
       <p className="text-base"> {año}</p>
       <p className="text-xs"> {tipo}</p>
      </div>
      
        <button onClick={() => infoPelicula(codigo)} className="bg-neutral-400 p-1 rounded-lg hover:bg-neutral-800 hover:text-white">Mas</button>
      
    
    </div>
   </div>

  );
}
  


export default CardPelicula;