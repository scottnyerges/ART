import React from "react";
import axios from "axios";
// import react-dom from "react-dom";
// const Slider = require('react-slick');

// const { Component } = React;
// const { render } = ReactDOM;


//not sure what this does
const carouselContainer = document.querySelector(".carousel-container");



// Carousel wrapper component
//cosntructor for carousel
export default class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0
    };
  }
//sets state of activeIndex
  goToSlide(index) {
    this.setState({ activeIndex: index });
  }
//modifies index to previous slide, if index is less than 1, go the end of array
  goToPrevSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }
//decrements index to go backwards
    --index;

    this.setState({
      activeIndex: index
    });
  }


//increments index to go to next slide
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
        <a
          href="#"
          className="carousel__arrow carousel__arrow--left"
          onClick={e => this.goToPrevSlide(e)}
        >
          <span className="fa fa-2x fa-angle-left" />
        </a>

        <ul className="carousel__slides">
          {this.props.slides.map((slide, index) =>
            <li
              className={
                index == this.state.activeIndex
                  ? "carousel__slide carousel__slide--active"
                  : "carousel__slide"
              }
              key={index}
            >
              <p className="carousel-slide__content">{slide.content}</p>

              <p>
                <strong className="carousel-slide__author">
                  {slide.author}
                </strong>,
                {" "}<small className="carousel-slide__source">
                  {slide.source}
                </small>
              </p>
            </li>
          )}
        </ul>

        <a
          href="#"
          className="carousel__arrow carousel__arrow--right"
          onClick={e => this.goToNextSlide(e)}
        >
          <span className="fa fa-2x fa-angle-right" />
        </a>

        <ul className="carousel__indicators">
          {this.props.slides.map((slide, index) =>
            <li key={index}>
              <a
                className={
                  index == this.state.activeIndex
                    ? "carousel__indicator carousel__indicator--active"
                    : "carousel__indicator"
                }
                onClick={e => this.goToSlide(index)}
              />
            </li>
          )}
        </ul>
      </div>
    );
  }
}

// export default Carousel;

// Render Carousel component
// render(<Carousel slides={carouselSlidesData} />, carouselContainer);



// // ********** OLD **********

// class Slide extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			image: null,
// 			caption: null,
// 			user: null
// 		};
// 	}
// 	render() {
// 		return (
// //			<div id="wrapper">
// //			 	<h2> Member Photos 3</h2>
// //			    <ul className='rslides'>
// 					<li>{this.props.image}</li>
// //			    </ul>
// //			</div>
// 			);
// 	}
// }

// class Slideshow extends React.Component {


// 	// renderSlide(i) {
// 	// 	return <Slide image={i} />;
// 	// }

// 	// componentDidMount() {
// 	// 	console.log("Component mounted");
// 	// }

// 	// const imageUrl = ["./images/slide01.png", "./images/slide02.png"];
// 	// const listItems = imageUrl.map((listItem) =>
// 	// 	<li>{listItem}<li>
// 	// 	);


// 	render () {
// 		// const data =[{"url": "./images/slide01.png"}, {"url": "./images/slide02.png"}];
// 		const data = ["./images/slide01.png", "./images/slide02.png", "./images/slide03.png", "./images/slide04.jpg", "./images/slide05.jpg"];
//  //   	const listItems = data.map((d) => <img key={d.url} src={d.url} />);

//     	return (
// 			<div className="carousel-container">
// //			 	<h2> Member Photos 3</h2>
// 			    <ul className='rslides'>
// 			    	{data.map(function(name, index){
// 			    		return <li><img key={index} src={name} /></li>
// 			    	})}
// 			     </ul>
// 			</div>

// 		)
//     	};
		
// };



// class SimpleSlider extends React.Component {

// 	componentDidMount() {
//  		console.log("Component mounted");
//  	}


//   render () {
//     var settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     return (
//       <Slider {...settings}>
//         <div><h3>1</h3></div>
//         <div><h3>2</h3></div>
//         <div><h3>3</h3></div>
//         <div><h3>4</h3></div>
//         <div><h3>5</h3></div>
//         <div><h3>6</h3></div>
//       </Slider>
//     );
//   }
// }



