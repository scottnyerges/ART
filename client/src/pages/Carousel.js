// import React from "react";
// import axios from "axios";
// const ReactDOM = require("react-dom");
// const { render } = ReactDOM;

// const carouselContainer = document.querySelector(".carousel-container");

// Data for carousel
// const carouselSlidesData = [
//   {
//     content:
//       "1",
//     author: "11",
//     source: "111"
//   }, {
//     content:
//       "2.",
//     author: "22",
//     source: "222"
//   }, {
//     content:
//       "3",
//     author: "33",
//     source: "333"
//   }, {
//     content:
//       "4",
//     author: "44",
//     source: "444"
//   }, {
//     content:
//       "5",
//     author: "55",
//     source: "555"
//   }, {
//     content:
//       "6",
//     author: "66",
//     source: "666"
//   },
//   {
//     content:
//       "7",
//     author: "77",
//     source: "777"
//   }
// ];


// // Component for left arrow
// class CarouselLeftArrow extends React.Component {
//   render() {
//     return (
//       <a
//         href="#"
//         className="carousel__arrow carousel__arrow--left"
//         onClick={this.props.onClick}
//       >
//         <span className="fa fa-2x fa-angle-left" />
//       </a>
//     );
//   }
// }

// // Component for right arrow
// class CarouselRightArrow extends React.Component {
//   render() {
//     return (
//       <a
//         href="#"
//         className="carousel__arrow carousel__arrow--right"
//         onClick={this.props.onClick}
//       >
//         <span className="fa fa-2x fa-angle-right" />
//       </a>
//     );
//   }
// }

// // Component for carousel indicator
// class CarouselIndicator extends React.Component {
//   render() {
//     return (
//       <li>
//         <a
//           className={
//             this.props.index == this.props.activeIndex
//               ? "carousel__indicator carousel__indicator--active"
//               : "carousel__indicator"
//           }
//           onClick={this.props.onClick}
//           />
//       </li>
//     );
//   }
// }

// Component for slide
// class CarouselSlide extends React.Component {
//   render() {
//     return (
//       <li
//         className={
//           this.props.index == this.props.activeIndex
//             ? "carousel__slide carousel__slide--active"
//             : "carousel__slide"
//         }
//       >
//         <p className="carousel-slide__content">{this.props.slide.content}</p>

//         <p>
//           <strong className="carousel-slide__author">
//             {this.props.slide.author}
//           </strong>,
//           {" "}
//           <small className="carousel-slide__source">
//             {this.props.slide.source}
//           </small>
//         </p>
//       </li>
//     );
//   }
// }

// // Carousel component
// class Carousel extends React.Component {
//   constructor(props) {
//     super(props);

//     this.goToSlide = this.goToSlide.bind(this);
//     this.goToPrevSlide = this.goToPrevSlide.bind(this);
//     this.goToNextSlide = this.goToNextSlide.bind(this);

//     this.state = {
//       activeIndex: 0
//     };
//   }

//   goToSlide(index) {
//     this.setState({
//       activeIndex: index
//     });
//   }

//   goToPrevSlide(e) {
//     e.preventDefault();

//     let index = this.state.activeIndex;
//     let { slides } = this.props;
//     let slidesLength = slides.length;

//     if (index < 1) {
//       index = slidesLength;
//     }

//     --index;

//     this.setState({
//       activeIndex: index
//     });
//   }

//   goToNextSlide(e) {
//     e.preventDefault();

//     let index = this.state.activeIndex;
//     let { slides } = this.props;
//     let slidesLength = slides.length - 1;

//     if (index === slidesLength) {
//       index = -1;
//     }

//     ++index;

//     this.setState({
//       activeIndex: index
//     });
//   }

//   render() {
//     return (
//       <div className="carousel">
//         <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />

//         <ul className="carousel__slides">
//           {this.props.slides.map((slide, index) =>
//             <CarouselSlide
//               key={index}
//               index={index}
//               activeIndex={this.state.activeIndex}
//               slide={slide}
//             />
//           )}
//         </ul>

//         <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />

//         <ul className="carousel__indicators">
//           {this.props.slides.map((slide, index) =>
//             <CarouselIndicator
//               key={index}
//               index={index}
//               activeIndex={this.state.activeIndex}
//               onClick={e => this.goToSlide(index)}
//             />
//           )}
//         </ul>
//       </div>
//     );
//   }
// }

//render(<Carousel slides={carouselSlidesData} />, carouselContainer);

// export default Carousel