"use client";

import { Component } from "react";

import MovieList from "@/components/MovieList";
import NavBar from "@/components/NavBar";

import { movies } from "@/components/moviesData";
import { projectHmrEvents } from "next/dist/build/swc/generated-native";

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

interface AppState {
  movies: MovieData[];
  cartcount: number;
}

export default class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      movies: movies,
      cartcount: 0,
    };
  }

  addStars = (id: number) => {
    this.setState((prevState) => {
      return {
        movies: prevState.movies.map((movie) =>
          movie.id === id && movie.stars < 5
            ? {
                ...movie,
                stars: movie.stars + 0.5,
              }
            : movie,
        ),
        cartcount: prevState.cartcount,
      };
    });
  };

  removeStars = (id: number) => {
    this.setState((prevState) => ({
      // cartcount: prevState.cartcount,
      movies: prevState.movies.map((movie) =>
        movie.id == id && movie.stars > 0
          ? {
              ...movie,
              stars: movie.stars - 0.5,
            }
          : movie,
      ),
      cartcount: prevState.cartcount,
    }));
  };

  handleFavourite = (id: number) => {
    this.setState((prevState) => ({
      movies: prevState.movies.map((movie) =>
        movie.id == id
          ? {
              ...movie,
              favourite: !movie.favourite,
            }
          : movie,
      ),
      cartcount: prevState.cartcount,
    }));
  };

  handleCart = (id: number) => {
    this.setState((prevState) => {
      const movie = prevState.movies.find((movie) => movie.id === id);

      if (!movie) {
        return null;
      }

      const newInCart = !movie.incart;

      return {
        movies: prevState.movies.map((movie) =>
          movie.id === id
            ? {
                ...movie,
                incart: newInCart,
              }
            : movie,
        ),

        cartcount: prevState.cartcount + (newInCart ? 1 : -1),
      };
    });
  };

  render() {
    return (
      <>
        <NavBar cartcount={this.state.cartcount} />
        <MovieList
          movies={this.state.movies}
          onAddStars={this.addStars}
          onRemoveStars={this.removeStars}
          onFavourite={this.handleFavourite}
          onCart={this.handleCart}
        />
      </>
    );
  }
}
