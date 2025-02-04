import { Link } from "react-router-dom";

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
import { RootState } from "../../redux/store";

const ProfileAvatar = () => {
  const role = useSelector((state: RootState) => state.auth.role);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
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
              </>
            ) : (
              // Admin Dashboard
              <Link to="/admin-dashboard">
                <DropdownMenuItem className="cursor-pointer">
                  Dashboard
                </DropdownMenuItem>
              </Link>
            )}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default ProfileAvatar;
