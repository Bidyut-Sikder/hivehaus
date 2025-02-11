import CarouselComponent from "../ui/create-carousel";

const CarouselSection = () => {
  return (
    <section className="container mx-auto">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
        Our Featured Rooms
      </h2>
      <CarouselComponent data={FeaturedRooms} />
    </section>
  );
};

export default CarouselSection;

const FeaturedRooms = [
  {
    name: "Sunlit Executive Suite",
    description:
      "A premium office space featuring floor-to-ceiling windows with panoramic city views. Ideal for executive meetings and creative brainstorming sessions.",
    imageUrl:
      "https://res.cloudinary.com/doozndhqq/image/upload/v1739197962/jonathan-wells-Yngqf938yNY-unsplash_ds0cyv.jpg",
  },
  {
    name: "Cozy Collaborative Corner",
    description:
      "A comfortable and modern workspace designed for collaborative teams. Includes ergonomic seating, whiteboards, and high-speed internet.",
    imageUrl:
      "https://res.cloudinary.com/doozndhqq/image/upload/v1739197079/alissa-de-leva-k6x-ZXSDV3Y-unsplash_w16nws.jpg",
  },
  {
    name: "Zen Garden Office",
    description:
      "A tranquil office setting with lush green elements and natural light. Perfect for focused work and creating a peaceful ambiance.",
    imageUrl:
      "https://res.cloudinary.com/doozndhqq/image/upload/v1739197079/john-price-FE7ATjzRRMs-unsplash_usrjhu.jpg",
  },
  {
    name: "Tech Hub Conference Room",
    description:
      "A fully equipped conference room with state-of-the-art audio and visual technology. Perfect for virtual meetings and presentations.",
    imageUrl:
      "https://res.cloudinary.com/doozndhqq/image/upload/v1739197075/dane-deaner-_-KLkj7on_c-unsplash_nvabos.jpg",
  },
  {
    name: "Creative Loft Space",
    description:
      "An open, vibrant loft with industrial decor and plenty of natural light. Ideal for creative workshops and dynamic projects.",
    imageUrl:
      "https://res.cloudinary.com/doozndhqq/image/upload/v1739197074/danielle-cerullo-bIZJRVBLfOM-unsplash_p6zsp8.jpg",
  },
];
