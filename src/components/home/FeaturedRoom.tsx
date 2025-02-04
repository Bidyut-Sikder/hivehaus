/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useGetRoomsQuery } from "@/redux/api/baseApi";
import { useGetRoomsQuery } from "../../redux/api/baseApi";
import FeatureCard from "../miscellaneous/FeaturedCard";

const FeaturedRoom = () => {
  const { data: featureData, isLoading } = useGetRoomsQuery({});

  if (isLoading) {
    return (
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:w-[90%] 2xl:w-[70%] gap-8 items-center justify-center mx-auto py-20">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="w-[340px] md:w-[350px] bg-slate-300/20 px-6 py-4 mx-auto rounded-2xl space-y-6 shadow-md animate-pulse"
          >
            <div className="w-full h-[190px] bg-gray-400 rounded-2xl"></div>
            <div className="space-y-2">
              <div className="h-6 w-2/3 rounded bg-gray-300"></div>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, ratingIndex) => (
                  <div
                    key={ratingIndex}
                    className="h-4 w-4 rounded bg-gray-300"
                  ></div>
                ))}
              </div>
            </div>
            <div className="mt-5 flex justify-between items-center font-medium">
              <div className="h-6 w-1/4 rounded bg-gray-300"></div>
            </div>
          </div>
        ))}
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-9/12 items-center justify-center mx-auto py-20">
      {featureData &&
        [...featureData]
          .reverse()
          .slice(0, 6)
          .map((feature: any, index) => (
            <FeatureCard feature={feature} key={feature._id} index={index} />
          ))}
    </section>
  );
};

export default FeaturedRoom;
