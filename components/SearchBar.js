import { SearchOutlined } from "@mui/icons-material"
import { CircularProgress, IconButton } from "@mui/material"

export const SearchBar = ({setNombrePelicula, optenerInformacion, cargando}) => {
   return (
    <div className="w-full flex justify-center mt-1">
          <div className="w-auto rounded-full border-black border bg-white p-2">
          <input onChange={(e) => setNombrePelicula(e.target.value)} className="outline-transparent w-96" type="text"/>
          <IconButton onClick={optenerInformacion}>
            {cargando?<CircularProgress />:<SearchOutlined />}
          </IconButton>
          </div>
        </div>
   )
}