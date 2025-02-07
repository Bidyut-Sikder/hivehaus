// import { useAppSelector } from "@/redux/hooks";
// import { TRoom } from "@/types/global";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useAppSelector } from "../../redux/hooks";
import { TRoom } from "../../types/global";

interface FeatureCardProps {
  feature: TRoom;
  index: number;
}

const FeatureCard = ({ feature }: FeatureCardProps) => {
  const role = useAppSelector((state) => state.auth.role);

  return (
    <article className="overflow-hidden rounded-lg h-[410px] shadow transition hover:shadow-lg">
      <div className="h-56 w-full overflow-hidden relative">
        <LazyLoadImage
          alt="room"
          src={feature?.image[0]}
          className="object-cover w-full h-full absolute hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="bg-white p-4 sm:p-6">
        <p className="block text-xs text-gray-500">$ {feature.pricePerSlot}</p>
        <a>
          <h3 className="mt-0.5 text-lg text-gray-900">{feature.name}</h3>
        </a>
        <p className="mt-2 line-clamp-2 text-sm/relaxed text-gray-500">
          {feature.description}
        </p>

        <div className="flex justify-end mt-2">
          {role === "admin" ? (
            <span className="bg-gray-500 text-xs rounded-3xl text-white py-1 px-2 font-medium opacity-50 cursor-not-allowed">
              Add Cart
            </span>
          ) : (
            <Link
              to={`/rooms/${feature._id}`}
              className="bg-black text-xs rounded-3xl text-white py-1 px-2 font-medium"
            >
              Add Cart
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default FeatureCard;
