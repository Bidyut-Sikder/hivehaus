import { getTimeDifference } from "../lib/utils";
import { useConfirmBookingMutation } from "../redux/api/bookingApi";
import { useAppSelector } from "../redux/hooks";


const CheckOut = () => {
  const userData = localStorage.getItem("persist:root");
  const user = userData ? JSON.parse(userData) : null;
  const bookingDetail = localStorage.getItem("bookingDetail");
  const booking = bookingDetail ? JSON.parse(bookingDetail) : null;
  const totalHours = getTimeDifference(booking.startTime, booking.endTime);
  const [confirmBooking, { isLoading }] =
    useConfirmBookingMutation();
  const token = useAppSelector((state) => state.auth.token);
  const userInfo = {
    name: JSON.parse(user.name) || "d",
    email: JSON.parse(user.email) || "s",
    phone: JSON.parse(user.phone) || "s",
    address: JSON.parse(user.address) || "s",
  };

  const bookingInfo = {
    startTime: booking.startTime || "",
    endTime: booking.endTime || "",
    selectedDate: booking.date || "",
    price: booking.pricePerSlot * totalHours,
  };

  const handleBooking = async () => {
    const res = await confirmBooking({ booking, token });

    if (res?.data.paymentUrl) {
      window.location.replace(res.data.paymentUrl);
    }
  };


  return (
    <div className="container mx-auto my-10 px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid md:grid-cols-[1fr_2fr] gap-6">
        {/* Left Section: User Information */}
        <div className="grid gap-4 rounded-lg border border-slate-300 p-5 bg-white shadow-md">
          <h2 className="text-2xl font-bold text-gray-800">
            Personal Information
          </h2>
          <div className="space-y-2">
            <div className="border-b py-2">
              Name:{" "}
              <div className="font-bold text-gray-700">{userInfo.name}</div>
            </div>
            <div className="border-b py-2">
              Email:{" "}
              <div className="font-bold text-gray-700">{userInfo.email}</div>
            </div>
            <div className="border-b py-2">
              Phone:{" "}
              <div className="font-bold text-gray-700">{userInfo.phone}</div>
            </div>
            <div className="border-b py-2">
              Address:{" "}
              <div className="font-bold text-gray-700">{userInfo.address}</div>
            </div>
          </div>
        </div>

        {/* Right Section: Booking Information */}
        <div className="grid gap-5 rounded-lg border border-slate-300 p-5 bg-white shadow-md">
          <h2 className="text-2xl font-bold text-gray-800">
            Booking Details
          </h2>

          <div className="flex justify-between border-b py-2">
            <div>
              Start Time:
              <div className="font-bold text-gray-700">
                {bookingInfo.startTime}
              </div>
            </div>
            <div>
              End Time:
              <div className="font-bold text-gray-700">
                {bookingInfo.endTime}
              </div>
            </div>
          </div>
          <div className="border-b py-2">
            Booking Date:{" "}
            <div className="font-bold text-gray-700">
              {bookingInfo.selectedDate}
            </div>
          </div>

          {/* Price Summary Section */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-800">
              Your Price Summary
            </h2>
            <div className="bg-blue-100 p-4 rounded-md">
              <div className="font-semibold text-lg text-gray-800">
                Total: ${bookingInfo.price}
              </div>
              <div className="text-xs text-gray-600">
                Includes taxes and charges
              </div>
            </div>
          </div>

          {/* Confirm Booking Button */}
          <div className="flex justify-end">
            <button
              onClick={handleBooking}
              type="button"
              className="bg-blue-600 text-white p-3 font-bold hover:bg-blue-500 text-md rounded-md w-full md:w-auto shadow-md transition-transform transform hover:scale-105"
            >
              {isLoading ? "sending.." : "Confirm Booking"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
