import {
  Table,
  TableBody,
  TableCell,
  // TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

import { SetStateAction, useEffect, useState } from "react";
import RoomLoadingContainer from "../../components/loading/RoomLoading";
import DataPagination from "../../components/shared/DataPagination";

import { useAppSelector } from "../../redux/hooks";
import { useLazyGetAdminBookingQuery } from "../../redux/api/bookingApi";
import { Link } from "react-router-dom";

interface Booking {
  _id: string;

  image: string[];
  name: string;

  date: string;
  room: {
    image: string[];
    name: string;
  };
  slot: {
    startTime: string;
    endTime: string;
  };
  paymentStatus: string;
  isConfirmed: string;
}

const MyBookings = () => {
  const token = useAppSelector((state) => state.auth.token);
  const [data, setData] = useState<Booking[]>([]);
  const [triggerAdminQuery, { isLoading }] = useLazyGetAdminBookingQuery();

  useEffect(() => {
    (async () => {
      const res = await triggerAdminQuery({ token });
      // console.log()
      if (res.data.success) {
        setData(res.data.data);
      }
    })();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalItems = data?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data?.slice(startIndex, endIndex);

  const handlePageChange = (page: SetStateAction<number>) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return <RoomLoadingContainer />;
  }

  return (
    <div className="w-full mb-1">
      <Table className="max-w-screen-xl mx-auto mt-24">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]"></TableHead>
            <TableHead className="w-[120px]">Room Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Payment Status</TableHead>
            <TableHead className="w-[100px]">Status</TableHead>
            <TableHead className="w-[100px]">Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentData?.map((booking) => (
            <TableRow key={booking?._id}>
              <TableCell className="font-medium">
                <img
                  src={booking?.room?.image?.[0] || "https://rb.gy/tkc7m8"}
                  alt="Room image"
                  className="rounded"
                />
              </TableCell>
              <TableCell>{booking?.room?.name}</TableCell>
              <TableCell>{booking?.date}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <span>{booking?.slot?.startTime}</span>-
                  <span>{booking?.slot?.endTime}</span>
                </div>
              </TableCell>
              <TableCell className="capitalize text-green-600">
                {booking?.paymentStatus}
              </TableCell>
              <TableCell className="text-right capitalize text-green-500">
                {booking?.isConfirmed}
              </TableCell>
              <TableCell className="text-right capitalize text-gray-500">
                <Link to={`/admin-dashboard/bookings/${booking?._id}`}>
                  {" "}
                  <span className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    Details
                  </span>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {totalItems > itemsPerPage && (
        <div className="w-full mb-14 mt-5">
          <DataPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default MyBookings;
