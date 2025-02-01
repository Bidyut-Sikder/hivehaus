import { Skeleton } from "../skeleton/skeleton";


const RoomLoading = () => {
    return (
        <div className="flex flex-col space-y-3">
            <Skeleton className="h-44 w-[250px] rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
    );
};

const RoomLoadingContainer = () => {
    return (
        <>
            <div className="pt-24 flex items-center justify-center">
                <div className="flex w-full max-w-screen-md items-center space-x-2">
                    <Skeleton className="h-10 w-full max-w-xs rounded-md" /> {/* Input skeleton */}
                    <Skeleton className="h-10 w-[90px] rounded-md" />       {/* Search button skeleton */}
                    <Skeleton className="h-10 w-[180px] rounded-md" />      {/* Select skeleton */}
                    <Skeleton className="h-10 w-[100px] rounded-md" />      {/* Reset button skeleton */}
                </div>
            </div>
            <div className="max-w-screen-2xl mx-auto grid gap-y-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 pt-10 pb-4 justify-items-center">
                {Array.from({ length: 8 }, (_, index) => (
                    <RoomLoading key={index} />
                ))}
            </div>
        </>
    );
};

export default RoomLoadingContainer;
