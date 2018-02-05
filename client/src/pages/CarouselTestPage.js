import React from "react";
// import Carousel from "./Carousel";
const ReactDOM = require("react-dom");
const { render } = ReactDOM;


const carouselSlidesData = [
  {
  src: "./images/slide01.png",
  caption: "This is a caption"
  },
  {
  src: "./images/slide02.png",
  caption: "This is another caption"
  },
  {
  src: "./images/slide03.png",
  caption: "The third caption"
  },
  {
  src: "./images/slide04.jpg",
  caption: "Captions are fun"
  },
  {
  src: "./images/slide05.jpg",
  caption: "Yet another caption"
  },
  {
  src: "./images/slide06.jpg",
  caption: "Caption America!"
  },
  {
  src: "./images/slide07.jpg",
  caption: "This caption is not informative"
  },
  {
  src: "./images/slide08.jpg",
  caption: "¯\_(ツ)_/¯"
  },
  {
  src: "./images/slide09.jpg",
  caption: "What is a caption, really?"
  },
  {
  src: "./images/slide10.jpg",
  caption: "Are we all just captions?"
  },
  {
  src: "./images/slide11.jpg",
  caption: "Consider that thoughts are the captions of life"
  },
  {
  src: "./images/slide12.jpg",
  caption: "Still captions run deep"
  },
  {
  src: "./images/slide13.jpg",
  caption: "Tour the Grand Caption"
  },
  {
  src: "./images/slide14.jpg",
  caption: "This caption is unique"
  },
  {
  src: "./images/slide15.jpg",
  caption: "This caption is unique"
  },
  {
  src: "./images/slide16.jpg",
  caption: "omg caption lol"
  },
  {
  src: "./images/slide17.jpg",
  caption: "caption ftw"
  },
  {
  src: "./images/slide18.jpg",
  caption: "Garden variety caption"
  },
  {
  src: "./images/slide19.jpg",
  caption: "Remember to stay hydrated"
  },
  {
  src: "./images/slide20.jpg",
  caption: "⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆ ⬆"
  },
  {
  src: "./images/slide21.jpg",
  caption: "&lt;Caption not found&gt;"
  },
  {
  src: "./images/slide22.jpg",
  caption: "Are you paying attention?"
  },
  {
  src: "./images/slide23.jpg",
  caption: "You should pay attention"
  },
  {
  src: "./images/slide24.png",
  caption: "The final caption before starting over"
  }
]


const CarouselTestPage = () => {
	return (
		<div className="carousel-container">
			<Carousel  slides={carouselSlidesData} />
		</div>
	)
}


class CarouselSlide extends React.Component {
  render() {
    return (
      <li
        className={
          this.props.index == this.props.activeIndex
            ? "carousel__slide carousel__slide--active"
            : "carousel__slide"
        }
      >
        <p className="carousel-slide__content"><img src={this.props.slide.src} alt="slide" /></p>

        <p>
          <strong className="carousel-slide__author">
            {this.props.slide.caption}
          </strong>
          {" "}
          <small className="carousel-slide__source">
            {this.props.slide.source}
          </small>
        </p>
      </li>
    );
  }
}


class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);

    this.state = {
      activeIndex: 0
    };
  }

  goToSlide(index) {
    this.setState({
      activeIndex: index
    });
  }

  goToPrevSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index
    });
  }

  goToNextSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  }

  render() {
    return (
      <div className="carousel">
        <ul className="carousel__slides">
          {this.props.slides.map((slide, index) =>
            <CarouselSlide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slide}
            />
          )}
        </ul>



        <ul className="carousel__indicators">

        </ul>
      </div>
    );
  }
}


export default CarouselTestPage;