import Carousel from "react-bootstrap/Carousel";
import slide from "../images/slide.svg";
const imagesArr = [
  {
    name: "slide1",
    url: slide,
    heading: "Slide Heading",
    alt: "slide label",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    name: "slide2",
    url: slide,
    heading: "Slide Heading",
    alt: "slide label",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  },
  {
    name: "slide3",
    url: slide,
    heading: "Slide Heading",
    alt: "slide label",
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  }
];
export default function Bcarousel() {
  return <Carousel>
    {imagesArr && imagesArr.map((img, i) => {
    return <Carousel.Item key={i}>
      <img
        className="d-block w-100"
        src={img.url}
        alt={img.alt}
      />
      <Carousel.Caption>
        <h3>{img.heading + (i+1)}</h3>
        <p>{img.description}</p>
      </Carousel.Caption>
    </Carousel.Item>
  }) }
  </Carousel>
}
