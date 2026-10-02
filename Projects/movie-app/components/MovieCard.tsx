"use client";

import { Component } from "react";

// It will be used purely for type-checking during compilation
interface MovieCardState {
  title: string;
  plot: string;
  price: string;
  rating: number;
  stars: number;
  favourite: boolean;
  incart: boolean;
}

class MovieCard extends Component<{}, MovieCardState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      title: "The Dark Knight",
      plot: "Batman raises the stakes in his war on crime with the help of Lt. Jim Gordon and DA Harvey Dent, until a criminal mastermind known as the Joker thrusts Gotham into anarchy.",
      price: "$9.99",
      rating: 8.5,
      stars: 0,
      favourite: true,
      incart: true,
    };
  }

  addStars = () => {
    if (this.state.stars >= 5.0) {
      return;
    }
    this.setState(
      (prevState) => ({
        stars: prevState.stars + 0.5,
      }) /*,
      () => console.log(this.state.stars),*/,
    );
  };

  removeStars = () => {
    if (this.state.stars <= 0.0) {
      return;
    }
    this.setState(
      (prevState) => ({
        stars: prevState.stars - 0.5,
      }) /*,
      () => console.log(this.state.stars),*/,
    );
  };

  handleFavourite = () => {
    this.setState({
      favourite: !this.state.favourite,
    });
  };

  handleCart = () => {
    this.setState({
      incart: !this.state.incart,
    });
  };

  render() {
    const { title, plot, price, rating, stars, favourite, incart } = this.state;
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
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">{price}</div>
            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <div>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/17236/17236423.png"
                    alt="Rating increase"
                    className="str-btn"
                    onClick={this.addStars}
                  />
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt="Rating star"
                    className="stars"
                  />
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828779.png"
                    alt="Rating increase"
                    className="str-btn"
                    onClick={this.removeStars}
                  />
                  <span className="starCount">{stars}</span>
                </div>
              </div>
              <button
                className={favourite ? "favourite-btn" : "unfavourite-btn"}
                type="button"
                onClick={this.handleFavourite}
              >
                {favourite ? "Favourite" : "Un-Favourite"}
              </button>
              <button
                className={incart ? "cart-btn" : "uncart-btn"}
                type="button"
                onClick={this.handleCart}
              >
                {incart ? "Add to Cart" : "Remove from Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
