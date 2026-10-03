"use client";

import { Component } from "react";
import MovieCard from "@/components/MovieCard";

interface MovieData {
  id: number;
  title: string;
  plot: string;
  price: string;
  rating: number;
  poster: string;
  stars: number;
  favourite: boolean;
  incart: boolean;
}

interface MovieCardProps {
  movies: MovieData[];

  onAddStars: (id: number) => void;
  onRemoveStars: (id: number) => void;
  onFavourite: (id: number) => void;
  onCart: (id: number) => void;
}

class MovieList extends Component<MovieCardProps, {}> {
  render() {
    const movies = this.props.movies;
    return (
      <>
        {movies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              onAddStars={this.props.onAddStars}
              onRemoveStars={this.props.onRemoveStars}
              onFavourite={this.props.onFavourite}
              onCart={this.props.onCart}
            />
          );
        })}
      </>
    );
  }
}

export default MovieList;
