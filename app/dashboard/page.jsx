import React from "react";
import { getMovies } from "../libs/server";

export default async function DashboardPage() {
  //1.Add shadcn Card
  const movies = await getMovies();

  return (
    <main>
      {/* Navigation bar */}
      <nav className="bg-blue-300 w-full h-16 flex  justify-start items-center">
        <div className="container">
          <h1 className="text-black font-bold text-xl">Mflix Dashboard</h1>
        </div>
      </nav>

      {/* Body Section */}
      <div className="container mt-8 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {movies?.length && 
        movies.map((movie) => (
          <div key = {movie.id} className="h-96 bg-green-400">
            {movie?.id} {movie?.title}
          </div>
        ))}
        </div>
      </div>
    </main>
  );
}
