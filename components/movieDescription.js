// components/MovieDetails.js

import { Rating, Stack } from "@mui/material";


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
              <strong>Plot:</strong> {movie.Plot}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p>
                  <strong>Actors:</strong> {movie.Actors}
                </p>
                <p>
                  <strong>Director:</strong> {movie.Director}
                </p>
                <p>
                  <strong>Writer:</strong> {movie.Writer}
                </p>
                <p>
                  <strong>Genre:</strong> {movie.Genre}
                </p>
                <p>
                  <strong>Country:</strong> {movie.Country}
                </p>
                <p>
                  <strong>Language:</strong> {movie.Language}
                </p>
              </div>
              <div>
                <p>
                  <strong>Awards:</strong> {movie.Awards}
                </p>
                <p>
                  <strong>BoxOffice:</strong> {movie.BoxOffice}
                </p>
                <p>
                  <strong>Released:</strong> {movie.Released}
                </p>
                <p>
                  <strong>Runtime:</strong> {movie.Runtime}
                </p>
                <p>
                  <strong>Year:</strong> {movie.Year}
                </p>
                <p>
                  <strong>imdbRating:</strong> 
                  {movie.imdbRating}
                </p>
                <p>
                  <strong>imdbVotes:</strong> {movie.imdbVotes}
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
