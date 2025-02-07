import {
  Table,
  TableBody,
  TableCell,
  // TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import Swal from "sweetalert2";
import { SetStateAction, useState } from "react";
import RoomLoadingContainer from "../../components/loading/RoomLoading";
import DataPagination from "../../components/shared/DataPagination";

import { Link } from "react-router-dom";
import {
  useDeleteRoomByIdMutation,
  useGetRoomsQuery,
} from "../../redux/api/baseApi";
import { useAppSelector } from "../../redux/hooks";

const MyBookings = () => {
  const { data: roomsData, refetch, isLoading } = useGetRoomsQuery({});
  const [deleteById, {}] = useDeleteRoomByIdMutation();

  const token = useAppSelector((state) => state.auth.token);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalItems = roomsData?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = roomsData?.slice(startIndex, endIndex);

  const handlePageChange = (page: SetStateAction<number>) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return <RoomLoadingContainer />;
  }

  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: "Do you want to delete?",
      showCancelButton: true,
      confirmButtonText: "Delete",
      confirmButtonColor: "#d33",
    });

    if (result.isConfirmed) {
      try {
        const res = await deleteById({ token, roomId: id });
        await refetch();
        if (res.data.success) {
          await Swal.fire("Success!", "", "success");
        }
      } catch (error) {
        console.error("Error deleting:", error);
        Swal.fire("Error!", "Failed to delete the item.", "error");
      }
    }
  };
  return (
    <div className="w-full mb-1">
      <h1 className="text-2xl">My Rooms</h1>
      <Table className="max-w-screen-xl mx-auto mt-24">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]"></TableHead>
            <TableHead className="w-[120px]">Room Name</TableHead>
            <TableHead>Floor No</TableHead>
            <TableHead>Room No</TableHead>
            <TableHead>Price Per Slot</TableHead>
            <TableHead className="w-[100px]">Edit</TableHead>
            <TableHead className="w-[100px]">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentData?.map((room) => (
            <TableRow key={room?._id}>
              <TableCell className="font-medium">
                <img
                  src={room?.image?.[0] || "https://rb.gy/tkc7m8"}
                  alt="Room image"
                  className="rounded"
                />
              </TableCell>
              <TableCell>{room?.name}</TableCell>

              <TableCell>
                <div className="flex gap-2">
                  <span>{room?.floorNo}</span>
                </div>
              </TableCell>
              <TableCell className="capitalize text-green-600">
                {room?.roomNo}
              </TableCell>
              <TableCell className="capitalize text-green-600">
                {room?.pricePerSlot}
              </TableCell>
              <TableCell className="text-right capitalize text-gray-500">
                <Link to={`/admin-dashboard/edit-room/${room?._id}`}>
                  {" "}
                  <span className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    Edit
                  </span>
                </Link>
              </TableCell>
              <TableCell className="text-right capitalize text-gray-500">
                <button onClick={() => room?._id && handleDelete(room._id)}>
                  {" "}
                  <span className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-800 transition-colors">
                    Delete
                  </span>
                </button>
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
