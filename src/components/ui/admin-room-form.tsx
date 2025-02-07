import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { useSelector } from "react-redux";

interface RoomFormInput {
  name: string;
  roomNo: number;
  floorNo: number;
  capacity: number;
  pricePerSlot: number;
  imageFiles: string[];
  amenities: string[];
  image: string[];
}

type Props = {
  onSave: (data: any) => void;
  isLoading: boolean;
  room?: any;
};

const RoomForm = ({ onSave, isLoading, room }: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<RoomFormInput>();

  const image = watch("image");
  //@ts-ignore
  const token = useSelector((state) => state.auth.token);
  const onSubmit: SubmitHandler<RoomFormInput> = (data) => {
    const formData = new FormData();

    if (room) {
      formData.append("id", room._id.toString());
    }

    formData.append("name", data.name);
    formData.append("roomNo", data.roomNo.toString());
    formData.append("capacity", data.capacity.toString());
    formData.append("pricePerSlot", data.pricePerSlot.toString());
    formData.append("floorNo", data.floorNo.toString());

    data.amenities.forEach((amenitie, index) => {
      formData.append(`amenities[${index}]`, amenitie);
    });

    Array.from(data.imageFiles).forEach((imageFile) => {
      formData.append(`imageFiles`, imageFile);//imageFiles will be checked in backend
    });

    if (data.image) {
      data.image.forEach((image, index) => {
        formData.append(`image[${index}]`, image);
      });
    }
    onSave({ formData, token, reset });
  };

  useEffect(() => {
    reset(room);
  }, [room,reset]);

  const handleDelete = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    imageUrl: string
  ) => {
    event.preventDefault();

    setValue(
      "image",
      image.filter((url) => url !== imageUrl)
    );
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Room Registration Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Room Name */}
        <div>
          <label className="block text-sm font-medium">Room Name:</label>
          <input
            className="w-full p-1 border rounded"
            {...register("name", { required: "Room name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Room Number */}
        <div>
          <label className="block text-sm font-medium">Room Number:</label>
          <input
            type="number"
            className="w-full p-1 border rounded"
            {...register("roomNo", { required: "Room number is required" })}
          />
          {errors.roomNo && (
            <p className="text-red-500 text-sm">{errors.roomNo.message}</p>
          )}
        </div>

        {/* Floor Number */}
        <div>
          <label className="block text-sm font-medium">Floor Number:</label>
          <input
            type="number"
            className="w-full p-1 border rounded"
            {...register("floorNo", { required: "Floor number is required" })}
          />
          {errors.floorNo && (
            <p className="text-red-500 text-sm">{errors.floorNo.message}</p>
          )}
        </div>

        {/* Capacity */}
        <div>
          <label className="block text-sm font-medium">Capacity:</label>
          <input
            type="number"
            className="w-full p-1 border rounded"
            {...register("capacity", { required: "Capacity is required" })}
          />
          {errors.capacity && (
            <p className="text-red-500 text-sm">{errors.capacity.message}</p>
          )}
        </div>

        {/* Price Per Slot */}
        <div>
          <label className="block text-sm font-medium">Price Per Slot:</label>
          <input
            type="number"
            step="0.01"
            className="w-full p-1 border rounded"
            {...register("pricePerSlot", {
              required: "Price per slot is required",
            })}
          />
          {errors.pricePerSlot && (
            <p className="text-red-500 text-sm">
              {errors.pricePerSlot.message}
            </p>
          )}
        </div>

        {/* Image Upload */}
        {/* <div>
          <label className="block text-sm font-medium">Upload Images:</label>
          <input
            type="file"
            accept="image/*"
            multiple
            className="w-full p-1 border rounded"
            {...register("imageFiles", {
              validate: (images) => {
                let totalLength = images.length + (image?.length || 0);

                if (totalLength === 0) {
                  return "Please select at least one image";
                }
                if (totalLength > 6) {
                  return "You can only upload up to 6 images";
                }
                return true;
              },
            })}
          />
          {errors.imageFiles && (
            <p className="text-red-500 text-sm">{errors.imageFiles.message}</p>
          )}
        </div> */}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Images:
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            className="w-full p-2 border border-gray-300 rounded-lg text-sm text-gray-600 cursor-pointer file:mr-2 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            {...register("imageFiles", {
              validate: (images) => {
                let totalLength = images.length + (image?.length || 0);
                if (totalLength === 0)
                  return "Please select at least one image";
                if (totalLength > 6)
                  return "You can only upload up to 6 images";
                return true;
              },
            })}
          />
          {errors.imageFiles && (
            <p className="mt-2 text-sm text-red-500">
              {errors.imageFiles.message}
            </p>
          )}
          {image && (
            <div className="grid mt-1 grid-cols-6 gap-4">
              {image.map((imageUrl, index) => (
                <div key={index} className="relative group">
                  <img
                    className="min-h-full object-cover"
                    src={imageUrl}
                    alt="images"
                  />
                  <button
                    onClick={(e) => handleDelete(e, imageUrl)}
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 text-white"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Amenities */}
        <div>
          <label className="block text-sm font-medium">Select Amenities:</label>
          <div className="grid grid-cols-2 gap-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                value="WiFi"
                {...register("amenities", {
                  required: "Please select at least one amenity",
                })}
              />
              <span className="ml-2">WiFi</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                value="Projector"
                {...register("amenities")}
              />
              <span className="ml-2">Projector</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                value="Whiteboard"
                {...register("amenities")}
              />
              <span className="ml-2">Whiteboard</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                value="Air Conditioning"
                {...register("amenities")}
              />
              <span className="ml-2">Air Conditioning</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                value="Parking"
                {...register("amenities")}
              />
              <span className="ml-2">Parking</span>
            </label>
          </div>
          {errors.amenities && (
            <p className="text-red-500 text-sm">{errors.amenities.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {isLoading ? "Loading.." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default RoomForm;
