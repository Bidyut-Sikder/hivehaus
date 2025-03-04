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
import { useLazyGetBookingQuery } from "../../redux/api/bookingApi";
import { useAppSelector } from "../../redux/hooks";
import { convertTo12HourFormat } from "../../lib/utils";

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
  const [triggerQuery, { isLoading }] = useLazyGetBookingQuery();

  console.log(setData);

  useEffect(() => {
    (async () => {
      const res = await triggerQuery({ token });
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

  console.log(data);

  const handlePageChange = (page: SetStateAction<number>) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return <RoomLoadingContainer />;
  }

  return (
    <div className="w-full">
      <Table className="max-w-screen-xl mx-auto mt-24">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]"></TableHead>
            <TableHead className="w-[120px]">Room Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Payment Status</TableHead>
            <TableHead className="w-[100px]">Status</TableHead>
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
                  <span>
                    {convertTo12HourFormat(parseInt(booking?.slot?.startTime))}
                  </span>
                  -
                  <span>
                    {convertTo12HourFormat(parseInt(booking?.slot?.endTime))}
                  </span>
                </div>
              </TableCell>
              <TableCell className="capitalize text-green-600">
                {booking?.paymentStatus}
              </TableCell>
              <TableCell className="text-right capitalize text-green-500">
                {booking?.isConfirmed}
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
