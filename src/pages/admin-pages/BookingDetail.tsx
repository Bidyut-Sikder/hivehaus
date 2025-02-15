import { useEffect, useState } from "react";
import { useLazyGetAdminBookingByBookingIdQuery } from "../../redux/api/bookingApi";
import { useAppSelector } from "../../redux/hooks";
import RoomLoadingContainer from "../../components/loading/RoomLoading";
import { useParams } from "react-router-dom";
import { convertTo12HourFormat } from "../../lib/utils";

interface Booking {
  date: string;
  isConfirmed: string;
  paymentStatus: string;
  totalAmount: number;
  room: {
    name: string;
    roomNo: number;
    floorNo: number;
    capacity: number;
    pricePerSlot: number;
    amenities: string[];
  };
  slot: {
    date: string;
    startTime: string;
    endTime: string;
    isBooked: boolean;
  };
  user: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
}

const AdminBookingDetails = () => {
  const { id } = useParams();
  const [getAdminBookingByBookingId, { isLoading }] =
    useLazyGetAdminBookingByBookingIdQuery();

  const token = useAppSelector((state) => state.auth.token);
  const [booking, setbooking] = useState<Booking>();

  useEffect(() => {
    (async () => {
      const res = await getAdminBookingByBookingId({ token, id });
      // console.log(res);
      if (res.data.success) {
        setbooking(res.data.data);
      }
    })();
  }, []);

  if (isLoading) {
    return <RoomLoadingContainer />;
  }

  return (
    <section className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Booking Details
        </h2>

        <div className="border rounded-lg p-6 mb-6 bg-gray-50 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold">Booking Details:</h3>
              <p>
                <strong>Date:</strong> {booking?.date}
              </p>
              <p>
                <strong>Is Confirmed:</strong> {booking?.isConfirmed}
              </p>
              <p>
                <strong>Payment Status:</strong> {booking?.paymentStatus}
              </p>
              <p>
                <strong>Total Amount:</strong> ${booking?.totalAmount}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Room Details:</h3>
              <p>
                <strong>Room Name:</strong> {booking?.room.name}
              </p>
              <p>
                <strong>Room No:</strong> {booking?.room.roomNo}
              </p>
              <p>
                <strong>Floor No:</strong> {booking?.room.floorNo}
              </p>
              <p>
                <strong>Capacity:</strong> {booking?.room.capacity}
              </p>
              <p>
                <strong>Price per Slot:</strong> ${booking?.room.pricePerSlot}
              </p>
              <p>
                <strong>Amenities:</strong> {booking?.room.amenities.join(", ")}
              </p>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">Slot Details:</h3>
            <p>
              <strong>Date:</strong> {booking?.slot.date}
            </p>
            <p>
              <strong>Start Time:</strong>{" "}
              {booking && (
                <>{convertTo12HourFormat(parseInt(booking?.slot.startTime))}</>
              )}
              {/* {booking?.slot.startTime} */}
            </p>
            <p>
              <strong>End Time:</strong>{" "}
              {booking && (
                <>{convertTo12HourFormat(parseInt(booking?.slot.endTime))}</>
              )}
            </p>
            <p>
              <strong>Is Booked:</strong>{" "}
              {booking?.slot.isBooked ? "Yes" : "No"}
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">User Details:</h3>
            <p>
              <strong>Name:</strong> {booking?.user.name}
            </p>
            <p>
              <strong>Email:</strong> {booking?.user.email}
            </p>
            <p>
              <strong>Phone:</strong> {booking?.user.phone}
            </p>
            <p>
              <strong>Address:</strong> {booking?.user.address}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminBookingDetails;

// const data = [
//     {
//       _id: "67a1f3493396024fa5ad4420",
//       date: "2025-02-04",
//       slot: {
//         _id: "67a1f3493396024fa5ad441e",
//         room: "679ca57f6a683934a71cb09d",
//         date: "2025-02-04",
//         startTime: "09:00",
//         endTime: "17:00",
//         isBooked: false,
//         isDeleted: false,
//         __v: 0,
//       },
//       room: {
//         _id: "679ca57f6a683934a71cb09d",
//         name: "Executive Room",
//         roomNo: 202,
//         floorNo: 2,
//         capacity: 2,
//         pricePerSlot: 120,
//         amenities: ["WiFi", "Air Conditioning", "Work Desk"],
//         isDeleted: false,
//       },
//       user: {
//         _id: "67921bd3be68340072cf4fae",
//         name: "Bidyut Sikder",
//         email: "bidyutsikder2002@gmail.com",
//         phone: "123-456-7890",
//         role: "user",
//         address: "123 Main St, Springfield",
//         __v: 0,
//       },
//       isConfirmed: "confirmed",
//       isDeleted: false,
//       totalAmount: 960,
//       paymentStatus: "paid",
//       __v: 0,
//     },
//   ];

//   const AdminBookingDetails = () => {
//     return (
//       <section className="min-h-screen bg-gray-50 py-10">
//         <div className="max-w-6xl mx-auto bg-white p-8 shadow-lg rounded-lg">
//           <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
//             Booking Details
//           </h2>
//           {data.map((booking) => (
//             <div
//               key={booking._id}
//               className="border rounded-lg p-6 mb-6 bg-gray-50 shadow-md"
//             >
//               {/* Booking Info */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <h3 className="text-lg font-semibold">Booking Details:</h3>
//                   <p>
//                     <strong>Date:</strong> {booking.date}
//                   </p>
//                   <p>
//                     <strong>Is Confirmed:</strong> {booking.isConfirmed}
//                   </p>
//                   <p>
//                     <strong>Payment Status:</strong> {booking.paymentStatus}
//                   </p>
//                   <p>
//                     <strong>Total Amount:</strong> ${booking.totalAmount}
//                   </p>
//                 </div>
//                 {/* Room Info */}
//                 <div>
//                   <h3 className="text-lg font-semibold">Room Details:</h3>
//                   <p>
//                     <strong>Name:</strong> {booking.room.name}
//                   </p>
//                   <p>
//                     <strong>Room No:</strong> {booking.room.roomNo}
//                   </p>
//                   <p>
//                     <strong>Floor No:</strong> {booking.room.floorNo}
//                   </p>
//                   <p>
//                     <strong>Capacity:</strong> {booking.room.capacity}
//                   </p>
//                   <p>
//                     <strong>Price per Slot:</strong> ${booking.room.pricePerSlot}
//                   </p>
//                   <p>
//                     <strong>Amenities:</strong>{" "}
//                     {booking.room.amenities.join(", ")}
//                   </p>
//                 </div>
//               </div>

//               {/* Slot Info */}
//               <div className="mt-4">
//                 <h3 className="text-lg font-semibold">Slot Details:</h3>
//                 <p>
//                   <strong>Date:</strong> {booking.slot.date}
//                 </p>
//                 <p>
//                   <strong>Start Time:</strong> {booking.slot.startTime}
//                 </p>
//                 <p>
//                   <strong>End Time:</strong> {booking.slot.endTime}
//                 </p>
//                 <p>
//                   <strong>Is Booked:</strong>{" "}
//                   {booking.slot.isBooked ? "Yes" : "No"}
//                 </p>
//               </div>

//               {/* User Info */}
//               <div className="mt-4">
//                 <h3 className="text-lg font-semibold">User Details:</h3>
//                 <p>
//                   <strong>Name:</strong> {booking.user.name}
//                 </p>
//                 <p>
//                   <strong>Email:</strong> {booking.user.email}
//                 </p>
//                 <p>
//                   <strong>Phone:</strong> {booking.user.phone}
//                 </p>
//                 <p>
//                   <strong>Address:</strong> {booking.user.address}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   };

//   export default AdminBookingDetails;
