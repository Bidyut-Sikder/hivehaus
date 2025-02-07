import { useParams } from "react-router-dom";
import {
  useGetSingleRoomQuery,
  useUpdateRoomByIdMutation,
} from "../../redux/api/baseApi";

import RoomForm from "../../components/ui/admin-room-form";
import { toast } from "sonner";

const EditRoom = () => {
  const { id } = useParams();

  const { data } = useGetSingleRoomQuery(id);

  const [updateRoom, { isLoading }] = useUpdateRoomByIdMutation();

  const handleRoomSave = async ({ formData, token }: any) => {
    try {
      const res = await updateRoom({ formData, token }).unwrap();
      if (res.success) {
        toast.success("Updated Successfully.");
      }
    } catch (error) {
      toast.success("Updated Failed.");
      console.error("Failed to update the room:", error);
    }
  };

  return (
    <div>
      <RoomForm onSave={handleRoomSave} isLoading={isLoading} room={data} />
    </div>
  );
};

export default EditRoom;
