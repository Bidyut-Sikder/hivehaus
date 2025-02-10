import CarouselComponent from "../ui/create-carousel";


const CarouselSection = () => {
  return (
    <section className="container mx-auto">
    <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Our Workstations</h2>
    <CarouselComponent data={visitedAreas} />
  </section>
  )
}

export default CarouselSection

const visitedAreas = [
  {
    name: "Aspen",
    description: "A prime destination for skiing and mountain adventures.",
    imageUrl:
      "https://res.cloudinary.com/doozndhqq/image/upload/v1738213548/hotelBooking/ys2wodklysitrvevkx7p.jpg",
  },
  {
    name: "San Diego",
    description: "Famous for its beaches, parks, and warm weather.",
    imageUrl:
      "https://res.cloudinary.com/doozndhqq/image/upload/v1738213548/hotelBooking/yhk49wvgqiby0u7cculo.jpg",
  },
  {
    name: "Lake Tahoe",
    description: "Known for its clear lake, hiking trails, and winter sports.",
    imageUrl:
      "https://res.cloudinary.com/doozndhqq/image/upload/v1738213548/hotelBooking/ys2wodklysitrvevkx7p.jpg",
  },
  {
    name: "Lake Boikal",
    description: "Known for its clear lake, hiking trails, and winter sports.",
    imageUrl:
      "https://res.cloudinary.com/doozndhqq/image/upload/v1738213548/hotelBooking/ys2wodklysitrvevkx7p.jpg",
  },
];