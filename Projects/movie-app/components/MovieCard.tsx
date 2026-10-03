"use client";

import { Component } from "react";

interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    plot: string;
    price: string;
    rating: number;
    poster: string;
    stars: number;
    favourite: boolean;
    incart: boolean;
  };

  onAddStars: (id: number) => void;
  onRemoveStars: (id: number) => void;
  onFavourite: (id: number) => void;
  onCart: (id: number) => void;
}

class MovieCard extends Component<MovieCardProps> {
  render() {
    const { id, title, plot, price, rating, poster, stars, favourite, incart } =
      this.props.movie;

    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img src={poster} alt={`${title} Poster`} />
          </div>

          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">{price}</div>

            <div className="footer">
              <div className="rating">
                <span>{rating}</span>
              </div>

              <div className="star-dis">
                <button
                  type="button"
                  className="star-btn"
                  onClick={() => this.props.onRemoveStars(id)}
                  aria-label="Decrease stars"
                >
                  −
                </button>

                <span className="stars">★</span>

                <button
                  type="button"
                  className="star-btn"
                  onClick={() => this.props.onAddStars(id)}
                  aria-label="Increase stars"
                >
                  +
                </button>

                <span className="starCount">{stars}</span>
              </div>

              <div className="footer-actions">
                <button
                  className={favourite ? "unfavourite-btn" : "favourite-btn"}
                  type="button"
                  onClick={() => this.props.onFavourite(id)}
                >
                  {favourite ? "Un-Favourite" : "Favourite"}
                </button>

                <button
                  className={incart ? "uncart-btn" : "cart-btn"}
                  type="button"
                  onClick={() => this.props.onCart(id)}
                >
                  {incart ? "Remove from Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
