
import { useForm, SubmitHandler } from "react-hook-form";

interface RoomFormInput {
  name: string;
  roomNo: number;
  floorNo: number;
  capacity: number;
  pricePerSlot: number;
  image: string;
  amenities: string[];
}

const CreateRoom = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RoomFormInput>();

  const onSubmit: SubmitHandler<RoomFormInput> = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <section className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Room Details Form
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Room Name */}
          <div>
            <label className="block text-gray-600 mb-1">Room Name:</label>
            <input
              type="text"
              {...register("name", { required: "Room name is required" })}
              placeholder="Deluxe Suite"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Room Number */}
          <div>
            <label className="block text-gray-600 mb-1">Room No:</label>
            <input
              type="number"
              {...register("roomNo", { required: "Room number is required" })}
              placeholder="101"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.roomNo && (
              <p className="text-red-500 text-sm mt-1">
                {errors.roomNo.message}
              </p>
            )}
          </div>

          {/* Floor Number */}
          <div>
            <label className="block text-gray-600 mb-1">Floor No:</label>
            <input
              type="number"
              {...register("floorNo", { required: "Floor number is required" })}
              placeholder="1"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.floorNo && (
              <p className="text-red-500 text-sm mt-1">
                {errors.floorNo.message}
              </p>
            )}
          </div>

          {/* Capacity */}
          <div>
            <label className="block text-gray-600 mb-1">Capacity:</label>
            <input
              type="number"
              {...register("capacity", { required: "Capacity is required" })}
              placeholder="4"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.capacity && (
              <p className="text-red-500 text-sm mt-1">
                {errors.capacity.message}
              </p>
            )}
          </div>

          {/* Price per Slot */}
          <div>
            <label className="block text-gray-600 mb-1">Price per Slot:</label>
            <input
              type="number"
              {...register("pricePerSlot", {
                required: "Price per slot is required",
              })}
              placeholder="150"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.pricePerSlot && (
              <p className="text-red-500 text-sm mt-1">
                {errors.pricePerSlot.message}
              </p>
            )}
          </div>

          {/* Image */}
          <div>
            <label className="block text-gray-600 mb-1">Image URL:</label>
            <input
              type="url"
              {...register("image", { required: "Image URL is required" })}
              placeholder="https://example.com/image.jpg"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">
                {errors.image.message}
              </p>
            )}
          </div>

          {/* Amenities */}
          <div>
            <label className="block text-gray-600 mb-1">Amenities:</label>
            <select
              multiple
              {...register("amenities", {
                required: "Select at least one amenity",
              })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="WiFi">WiFi</option>
              <option value="Air Conditioning">Air Conditioning</option>
              <option value="Smart TV">Smart TV</option>
              <option value="Mini Bar">Mini Bar</option>
            </select>
            {errors.amenities && (
              <p className="text-red-500 text-sm mt-1">
                {errors.amenities.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg focus:ring-2 focus:ring-blue-400"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateRoom;
