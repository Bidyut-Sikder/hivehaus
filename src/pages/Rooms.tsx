import DataPagination from "@/components/shared/DataPagination";
import RoomLoading from "@/components/loading/RoomLoading";
import RoomCard from "@/components/RoomCard";
// import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useLazyGetRoomsQuery } from "@/redux/api/baseApi";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Rooms = () => {
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);
    const [triggerGetRooms, { data: roomData,isLoading }] = useLazyGetRoomsQuery();
    const totalItems = roomData?.length || 0;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentRoomData = roomData?.slice(startIndex, endIndex);

    useEffect(() => {
        triggerGetRooms({ search, sortBy });
    }, [search, sortBy, triggerGetRooms]);

    const handleSearch = () => {
        triggerGetRooms({ search, sortBy });
    };

    const handleReset = () => { 
        setSearch('');
        setSortBy('');
        triggerGetRooms({});
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    if(isLoading){
        return <RoomLoading />
    }

    return (
        <>
            {/* Search and Filter Section */}
            <div className="pt-24 flex items-center justify-center">
                <div className="flex w-full max-w-screen-md items-center space-x-2">
                    <Input
                        type="text"
                        placeholder="Search by room name"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <Button type="submit" onClick={handleSearch}>
                        Search
                    </Button>
                    <Select onValueChange={setSortBy}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Sort by price" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="priceAsc">Price: Low to High</SelectItem>
                                <SelectItem value="priceDesc">Price: High to Low</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Button type="button" onClick={handleReset}>
                        Reset Filters
                    </Button>
                </div>
            </div>
            <div className="max-w-screen-2xl mx-auto grid gap-y-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 pt-10 pb-4 justify-items-center">
                {currentRoomData?.map((data) => (
                    <RoomCard room={data} key={data._id} />
                ))}
            </div>

            <div className="w-full mb-20">
                <DataPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
        </>
    );
};

export default Rooms;
