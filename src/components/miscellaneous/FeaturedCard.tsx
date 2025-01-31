import { useAppSelector } from "@/redux/hooks";
import { TRoom } from "@/types/global";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface FeatureCardProps {
    feature: TRoom;
    index: number
}

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
    const role = useAppSelector((state) => state.auth.role)


    const imageUrl = feature?.image[0] || "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";

    const descriptions = [
        "Experience a luxurious escape with panoramic views and modern decor.",
        "Step into a cozy space with all essentials, perfect for a relaxing stay.",
        "Enjoy open-air balconies and a spacious layout in this serene retreat.",
        "A modern, urban design with quick access to all the city’s best spots.",
        "Unwind in a stylish suite designed for comfort and relaxation.",
        "Discover this chic room featuring elegant furnishings and soft lighting."
    ];

    const description = descriptions[index % descriptions.length];


    return (
        <article className="overflow-hidden rounded-lg h-[410px] shadow transition hover:shadow-lg">
            <div className="h-56 w-full overflow-hidden relative">
                <LazyLoadImage
                    alt="room"
                    src={imageUrl}
                    className="object-cover w-full h-full absolute hover:scale-105 transition-transform duration-300"
                    // effect="blur"
                />
            </div>

            {/* <img
                alt="room"
                src={imageUrl}
                className="h-56 w-full object-cover hover:scale-105 transition-transform duration-300"
            /> */}
            <div className="bg-white p-4 sm:p-6">
                <p className="block text-xs text-gray-500">$ {feature.pricePerSlot}</p>
                <a>
                    <h3 className="mt-0.5 text-lg text-gray-900">{feature.name}</h3>
                </a>
                <p className="mt-2 line-clamp-2 text-sm/relaxed text-gray-500">{description}</p>

                <div className="flex justify-end mt-2">
                    {role === 'admin' ? (
                        <span className="bg-gray-500 text-xs rounded-3xl text-white py-1 px-2 font-medium opacity-50 cursor-not-allowed">
                            Add Cart
                        </span>
                    ) : (
                        <Link to={`/rooms/${feature._id}`} className="bg-black text-xs rounded-3xl text-white py-1 px-2 font-medium">
                            Add Cart
                        </Link>
                    )}
                </div>
            </div>
        </article>
    )
}

export default FeatureCard