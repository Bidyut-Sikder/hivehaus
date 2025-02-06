import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useCreateRoomMutation } from "../../redux/api/baseApi";
import { useSelector } from "react-redux";

interface RoomFormInput {
  name: string;
  roomNo: number;
  floorNo: number;
  capacity: number;
  pricePerSlot: number;
  image: string[];
  amenities: string[];
}

const RoomForm: React.FC = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<RoomFormInput>();
  const [createRoom, { isLoading }] = useCreateRoomMutation();

  //@ts-ignore
  const token = useSelector((state) => state.auth.token);
  const onSubmit: SubmitHandler<RoomFormInput> = (data) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("roomNo", data.roomNo.toString());
    formData.append("capacity", data.capacity.toString());
    formData.append("pricePerSlot", data.pricePerSlot.toString());
    formData.append("floorNo", data.floorNo.toString());

    data.amenities.forEach((amenitie, index) => {
      formData.append(`amenities[${index}]`, amenitie);
    });

    Array.from(data.image).forEach((imageFile) => {
      formData.append(`image`, imageFile);
    });

    createRoom({ formData, token });

    // if (formDataJson.imageUrls) {
    //   formDataJson.imageUrls.forEach((imageUrl, index) => {
    //     formData.append(`imageUrls[${index}]`, imageUrl);
    //   });
    // }
  };
  console.log(isLoading);
  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Room Registration Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Room Name */}
        <div>
          <label className="block text-sm font-medium">Room Name:</label>
          <input
            className="w-full p-2 border rounded"
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
            className="w-full p-2 border rounded"
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
            className="w-full p-2 border rounded"
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
            className="w-full p-2 border rounded"
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
            className="w-full p-2 border rounded"
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
        <div>
          <label className="block text-sm font-medium">Upload Images:</label>
          <input
            type="file"
            accept="image/*"
            multiple
            className="w-full p-2 border rounded"
            {...register("image", {
              validate: (images) => {
                let totalLength = images.length; //+ (existingImageUrls?.length || 0);

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
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image.message}</p>
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
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RoomForm;
