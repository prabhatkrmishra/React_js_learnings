"use client";

import { Component } from "react";

class MovieCard extends Component {
  render() {
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
              src="https://m.media-amazon.com/images/I/81IfoBox2TL.jpg"
              alt="Poster"
            />
          </div>
          <div className="right">
            <div className="title">The Dark Knight</div>
            <div className="plot">
              Batman raises the stakes in his war on crime with the help of Lt.
              Jim Gordon and DA Harvey Dent, until a criminal mastermind known
              as the Joker thrusts Gotham into anarchy.
            </div>
            <div className="price">$9.99</div>
            <div className="footer">
              <div className="rating">8.5</div>
              <div className="stars">&#9733;&#9733;&#9733;&#9733;</div>
              <button className="favourite-btn" type="button">
                Favourite
              </button>
              <button className="cart-btn" type="button">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
