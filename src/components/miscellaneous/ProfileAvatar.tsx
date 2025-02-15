import { Link, useNavigate } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useSelector } from "react-redux";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { persistor, RootState } from "../../redux/store";
import { useAppDispatch } from "../../redux/hooks";
import {
  clearRole,
  removeToken,
  removeUserData,
} from "../../redux/slices/authSlice";

const ProfileAvatar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const role = useSelector((state: RootState) => state.auth.role);

  const handleLogout = () => {
    dispatch(clearRole());
    dispatch(removeToken());
    dispatch(removeUserData());
    persistor.purge();
    localStorage.removeItem("bookingDetail");
    setTimeout(() => {
      navigate("/");
    }, 10); // Small delay ensures state updates first
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar>
            <AvatarImage src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" />
            <AvatarFallback>USER</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 mr-4 xl:mr-8">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {role == "user" ? (
              <>
                {/* User Dashboard */}
                <Link to="/user-dashboard">
                  <DropdownMenuItem className="cursor-pointer">
                    Dashboard
                  </DropdownMenuItem>
                </Link>
                <Link to="/user-dashboard/profile">
                  <DropdownMenuItem className="cursor-pointer">
                    Profile
                  </DropdownMenuItem>
                </Link>
              </>
            ) : (
              // Admin Dashboard
              <>
                <Link to="/admin-dashboard">
                  <DropdownMenuItem className="cursor-pointer">
                    Dashboard
                  </DropdownMenuItem>
                </Link>
                <Link to="/admin-dashboard/profile">
                  <DropdownMenuItem className="cursor-pointer">
                    Profile
                  </DropdownMenuItem>
                </Link>
              </>
            )}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default ProfileAvatar;
