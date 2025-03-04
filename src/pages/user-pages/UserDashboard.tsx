import { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpenCheck, User } from "lucide-react";
import { IconArrowLeft } from "@tabler/icons-react";
import { persistor } from "../../redux/store";
import { useAppDispatch } from "../../redux/hooks";
import {
  clearRole,
  removeToken,
  removeUserData,
} from "../../redux/slices/authSlice";

import {
  Sidebar,
  SidebarBody,
  SidebarLink,
} from "../../components/ui/user-sidebar";
import ChartBoard from "../../components/ui/Chart";

// import Chart from "@/components/UserCharts/Chart";

export default function UserDashboard() {
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

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

  const links = [
    {
      label: "My Bookings",
      href: "/user-dashboard/bookings",
      icon: (
        <BookOpenCheck className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "/user-dashboard/profile",
      icon: (
        <User className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "/",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
      action: handleLogout,
    },
  ];

  return (
    <div
      className={
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mt-20 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden"
      }
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10 border-r">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-5 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          {/* <div>
            <SidebarLink
              link={{
                label: `${name}`,
                href: "/",
                icon: (
                  <img
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div> */}
        </SidebarBody>
      </Sidebar>
      <div className="flex-1 p-4">
        {location.pathname === "/user-dashboard" ? (
          <div className="overflow-auto">
            <ChartBoard />
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
}

export const Logo = () => {
  return (
    <Link
      to="/user-dashboard"
      className="font-normal flex space-x-2 items-center text-sm text-slate-700 py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-slate-700 dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-slate-700 dark:text-white whitespace-pre"
      >
        Office
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      to="/user-dashboard"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};
