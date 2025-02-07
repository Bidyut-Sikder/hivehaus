
// import ProductCarousel from "@/components/ui/ProductCarousel"


import {  useLocation, useNavigate, useParams } from "react-router-dom";


import { useEffect, useState } from "react";
import { useAppSelector } from "../redux/hooks";
import { useGetSingleRoomQuery } from "../redux/api/baseApi";
import { useLazyCheckBookinAvilabilityQuery } from "../redux/api/bookingApi";
import { Skeleton } from "../components/skeleton/skeleton";
import ProductCarousel from "../components/product/ProductCarousel";
import { Button } from "../components/ui/button";

function formatDateToYYYYMMDD(date: any) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

const formattedDate = formatDateToYYYYMMDD(new Date());
const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

const BookRoom = () => {
  const location=useLocation()
  const { id } = useParams();
  const role = useAppSelector((state) => state.auth.role);
  const navigate = useNavigate();
  const { data: room, isLoading } = useGetSingleRoomQuery(id);
  const [selectedDate, setSelectedDate] = useState<string>(formattedDate);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };
  const [startTime, setStartTime] = useState<string | null>("09:00 AM");
  const [endTime, setEndTime] = useState<string | null>("05:00 PM");

  const [triggerCheckBooking, { isError }] =
    useLazyCheckBookinAvilabilityQuery();

  useEffect(() => {
    triggerCheckBooking({ roomId: id, startTime, endTime, date: selectedDate });
  }, [id, startTime, endTime, selectedDate, triggerCheckBooking]);

  const handleBooking = () => {
    localStorage.setItem(
      "bookingDetail",
      JSON.stringify({
        roomId: id,
        startTime,
        endTime,
        date: selectedDate,
        pricePerSlot: room?.pricePerSlot,
      })
    );

    navigate("/booking-details");
  };

  const handleLogin = () => {
    // console.log(location)
    navigate("/login", { state: { from: location } });
  };

  // console.log(data);

  const handleStartTimeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setStartTime(event.target.value);
  };

  const handleEndTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setEndTime(event.target.value);
  };

  if (isLoading) {
    return (
      <div className="grid lg:grid-cols-2 2xl:grid-cols-3 p-8 gap-6 lg:gap-20 mt-36 max-w-screen-2xl mx-auto bg-gray-50/60">
        <Skeleton className="h-[30vh]" />
        <div className="2xl:col-span-2 flex flex-col gap-y-7 mb-10">
          <Skeleton className="h-8 w-1/2" />
          <Skeleton className="h-5 w-40" />
          <Skeleton className="h-5 w-40" />
          <Skeleton className="h-5 w-40" />
          <Skeleton className="w-1/3 h-10 flex items-center justify-center" />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="grid lg:grid-cols-2 2xl:grid-cols-3 pt-4 pl-4 gap-6 lg:gap-20 mt-36 max-w-screen-2xl mx-auto bg-gray-50/60">
        <ProductCarousel room={room} />
        <div className="2xl:col-span-2 flex flex-col gap-2 mt-10 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {room?.name}
          </h2>
          <p className="mt-4 max-w-3xl tracking-wide text-gray-500">
           {room?.description}
          </p>
          <p className="text-md text-gray-600 font-semibold mt-4">
            Floor: {room?.floorNo}
          </p>
          <p className="text-md text-gray-600 font-semibold mt-2">
            Room No: {room?.roomNo}
          </p>
          <p className="text-md font-semibold text-gray-600 mt-2">
            Capacity: {room?.capacity} people
          </p>

          <div className="">
            <label
              htmlFor="date-picker"
              className="block text-sm font-medium text-gray-700"
            >
              Pick a Date
            </label>
            <input
              type="date"
              id="date-picker"
              value={selectedDate}
              onChange={handleDateChange}
              className="mt-1 block  px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
            />
          </div>

          <div className="">
            <h2 className="text-sm font-semibold mb-4">Pick a Time Range</h2>

            {/* Start Time Selector */}
            <div className="mb-4">
              <label className="block mb-1 font-medium">Start Time</label>
              <select
                value={startTime || ""}
                onChange={handleStartTimeChange}
                className=" p-2 border rounded-md"
              >
                {timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>

            {/* End Time Selector */}
            <div className="mb-4">
              <label className="block mb-1 font-medium">End Time</label>
              <select
                value={endTime || ""}
                onChange={handleEndTimeChange}
                className=" p-2 border rounded-md"
              >
                {/* <option value="">Select End Time</option> */}
                {timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>

            {/* Display Selected Time Range */}
            {isError ? (
              <p className="mt-4 text-lg">Available</p>
            ) : (
              <p className="mt-4 text-lg">Taken</p>
            )}
          </div>

          <p className="mt-4 max-w-3xl tracking-wide text-gray-500">
            {room?.amenities.map((amenity:string, index:number) => (
              <span key={index} className="inline-block mr-1 capitalize">
                {amenity},
              </span>
            ))}
          </p>

          <p className="text-2xl font-bold text-slate-800/85 mt-4">
            ${room?.pricePerSlot} <span className="text-sm">hour</span>
          </p>

          {/* <Link
            to={role === "user" ? `/booking-details` : `/login`}
            // to={`/slotBooking/${id}`}
          > */}
          <Button
            onClick={role === "user" ? handleBooking : handleLogin}
            className="w-9/12 mt-6 flex items-center justify-center"
          >
            CheckOut
          </Button>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
};

export default BookRoom;

// import { Button } from "@/components/ui/button";
// // import ProductCarousel from "@/components/ui/ProductCarousel"
// import { Skeleton } from "@/components/skeleton/skeleton";
// import { useGetSingleRoomQuery } from "@/redux/api/baseApi";
// import { Link, useParams } from "react-router-dom";
// import ProductCarousel from "@/components/product/ProductCarousel";

// import { useEffect, useState } from "react";
// import { useLazyCheckBookinAvilabilityQuery } from "@/redux/api/bookingApi";

// function formatDateToYYYYMMDD(date:any) {
//   const year = date.getFullYear();
//   const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
//   const day = String(date.getDate()).padStart(2, '0');

//   return `${year}-${month}-${day}`;
// }

// const formattedDate = formatDateToYYYYMMDD(new Date());
// const timeSlots = [
//   "09:00 AM",
//   "10:00 AM",
//   "11:00 AM",
//   "12:00 PM",
//   "01:00 PM",
//   "02:00 PM",
//   "03:00 PM",
//   "04:00 PM",
//   "05:00 PM",
// ];

// const BookRoom = () => {
//   const { id } = useParams();

//   const { data: room, isLoading } = useGetSingleRoomQuery(id);
//   const [selectedDate, setSelectedDate] = useState<string>(formattedDate);

//   const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSelectedDate(event.target.value);
//   };
//   const [startTime, setStartTime] = useState<string | null>("09:00 AM");
//   const [endTime, setEndTime] = useState<string | null>("05:00 PM");

//   const [triggerCheckBooking, {data:checkData}] = useLazyCheckBookinAvilabilityQuery();

//   useEffect(() => {
//     triggerCheckBooking({ roomId: id, startTime, endTime, date: selectedDate });

//   }, [id, startTime, endTime, selectedDate,triggerCheckBooking]);

//   console.log(checkData.data.length)

//   const handleStartTimeChange = (
//     event: React.ChangeEvent<HTMLSelectElement>
//   ) => {
//     setStartTime(event.target.value);
//   };

//   const handleEndTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setEndTime(event.target.value);
//   };

//   if (isLoading) {
//     return (
//       <div className="grid lg:grid-cols-2 2xl:grid-cols-3 p-8 gap-6 lg:gap-20 mt-36 max-w-screen-2xl mx-auto bg-gray-50/60">
//         <Skeleton className="h-[30vh]" />
//         <div className="2xl:col-span-2 flex flex-col gap-y-7 mb-10">
//           <Skeleton className="h-8 w-1/2" />
//           <Skeleton className="h-5 w-40" />
//           <Skeleton className="h-5 w-40" />
//           <Skeleton className="h-5 w-40" />
//           <Skeleton className="w-1/3 h-10 flex items-center justify-center" />
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className="grid lg:grid-cols-2 2xl:grid-cols-3 pt-4 pl-4 gap-6 lg:gap-20 mt-36 max-w-screen-2xl mx-auto bg-gray-50/60">
//         <ProductCarousel room={room} />
//         <div className="2xl:col-span-2 flex flex-col gap-2 mt-10 mb-10">
//           <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
//             {room?.name}
//           </h2>
//           <p className="mt-4 max-w-3xl tracking-wide text-gray-500">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, in
//             labore deserunt eaque at dolorem a praesentium ipsam molestiae iusto
//             obcaecati id ad assumenda repellendus.
//           </p>
//           <p className="text-md text-gray-600 font-semibold mt-4">
//             Floor: {room?.floorNo}
//           </p>
//           <p className="text-md text-gray-600 font-semibold mt-2">
//             Room No: {room?.roomNo}
//           </p>
//           <p className="text-md font-semibold text-gray-600 mt-2">
//             Capacity: {room?.capacity} people
//           </p>

//           <div className="">
//             <label
//               htmlFor="date-picker"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Pick a Date
//             </label>
//             <input
//               type="date"
//               id="date-picker"
//               value={selectedDate}
//               onChange={handleDateChange}
//               className="mt-1 block  px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
//             />
//           </div>

//           <div className="">
//             <h2 className="text-sm font-semibold mb-4">Pick a Time Range</h2>

//             {/* Start Time Selector */}
//             <div className="mb-4">
//               <label className="block mb-1 font-medium">Start Time</label>
//               <select
//                 value={startTime || ""}
//                 onChange={handleStartTimeChange}
//                 className=" p-2 border rounded-md"
//               >
//                 {/* <option value="">Select Start Time</option> */}
//                 {timeSlots.map((time) => (
//                   <option key={time} value={time}>
//                     {time}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* End Time Selector */}
//             <div className="mb-4">
//               <label className="block mb-1 font-medium">End Time</label>
//               <select
//                 value={endTime || ""}
//                 onChange={handleEndTimeChange}
//                 className=" p-2 border rounded-md"
//               >
//                 {/* <option value="">Select End Time</option> */}
//                 {timeSlots.map((time) => (
//                   <option key={time} value={time}>
//                     {time}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Display Selected Time Range */}
//             {checkData?.data.length>0 ? (
//               <p className="mt-4 text-lg">
//                 Selected Time is taken

//               </p>
//             ):(
//               <p className="mt-4 text-lg">
//               Selected Time is available

//             </p>
//             )}
//           </div>

//           <p className="mt-4 max-w-3xl tracking-wide text-gray-500">
//             {room?.amenities.map((amenity, index) => (
//               <span key={index} className="inline-block mr-1 capitalize">
//                 {amenity},
//               </span>
//             ))}
//           </p>

//           <p className="text-2xl font-bold text-slate-800/85 mt-4">
//             ${room?.pricePerSlot}
//           </p>
//           <Link to={`/slotBooking/${id}`}>
//             <Button className="w-9/12 mt-6 flex items-center justify-center">
//               Book Now
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BookRoom;
