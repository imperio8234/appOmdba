


const MovieDetails = ({ movie }) => {
  return (
    <div className="container mx-auto p-6 ">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex">
          <div className="w-1/3">
            <img
              src={movie.Poster}
              alt={`${movie.Title} Poster`}
              className="w-full h-auto"
            />
          </div>
          <div className="w-2/3 p-6">
            <h1 className="text-2xl font-bold mb-4">{movie.Title}</h1>
            <p className="mb-4">
              <strong>Trama:</strong> {movie.Plot}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p>
                  <strong>Actores:</strong> {movie.Actors}
                </p>
                <p>
                  <strong>Director:</strong> {movie.Director}
                </p>
                <p>
                  <strong>Escritor:</strong> {movie.Writer}
                </p>
                <p>
                  <strong>Genero:</strong> {movie.Genre}
                </p>
                <p>
                  <strong>Pais:</strong> {movie.Country}
                </p>
                <p>
                  <strong>Idioma:</strong> {movie.Language}
                </p>
              </div>
              <div>
                <p>
                  <strong>Premios:</strong> {movie.Awards}
                </p>
                <p>
                  <strong>Taquillas:</strong> {movie.BoxOffice}
                </p>
                <p>
                  <strong>Estreno:</strong> {movie.Released}
                </p>
                <p>
                  <strong>Duracion:</strong> {movie.Runtime}
                </p>
                <p>
                  <strong>Año:</strong> {movie.Year}
                </p>
                <p>
                  <strong>imdbRating:</strong> 
                  {movie.imdbRating}
                </p>
                <p>
                  <strong>Numero de votos:</strong> {movie.imdbVotes}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
