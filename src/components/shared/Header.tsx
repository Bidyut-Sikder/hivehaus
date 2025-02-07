import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../public/images/hivehaus.webp";

import { Button } from "../ui/button";
import ProfileAvatar from "../miscellaneous/ProfileAvatar";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { clearRole, removeToken, removeUserData } from "../../redux/slices/authSlice";
import { persistor } from "../../redux/store";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef<HTMLDivElement>(null);
  const role = useAppSelector((state) => state.auth.role );

  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const closeDropDown = (e: MouseEvent) => {
      const targetNode = e.target as Node | null;
      if (
        dropDownMenuRef.current &&
        targetNode &&
        !dropDownMenuRef.current.contains(targetNode)
      ) {
        setDropDownState(false); 
      }
    };

    document.addEventListener("mousedown", closeDropDown);

    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getTextColor = () => {
    if (location.pathname === "/") {
      return isScrolled ? "text-black" : "text-white";
    } else if (location.pathname === "/aboutUs") {
      return isScrolled ? "text-black" : "text-white";
    } else {
      return "text-black";
    }
  };

  const handleLogout = () => {
    dispatch(clearRole());
    dispatch(removeToken());
    dispatch(removeUserData());
    persistor.purge();

    navigate("/");
  };

  return (
    <nav
      className={`flex items-center px-4 xl:px-8 py-2 z-50 mb-24 justify-between fixed top-0 left-0 w-full transition-all duration-300 ${
        isScrolled ? "bg-slate-50 shadow-lg" : "bg-transparent"
      } ${getTextColor()}`}
    >
      <Link
        to="/"
        className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold transition-all duration-200 hover:scale-110"
      >
        <img src={logo} alt="" className="size-14 text-black" />
      </Link>
      <ul className="hidden  md:flex items-center font-semibold justify-between gap-10 ">
        <li className="group flex cursor-pointer flex-col">
          <Link to="/">Home</Link>
          <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-slate-700 transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="group flex cursor-pointer flex-col">
          <Link to="/rooms">Rooms</Link>
          <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-slate-700 transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="group flex  cursor-pointer flex-col">
          <Link to="aboutUs">About</Link>
          <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-slate-700 transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="group flex  cursor-pointer flex-col">
          <Link to="contact">Contact</Link>
          <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-slate-700 transition-all duration-300 group-hover:w-full"></span>
        </li>
      </ul>
      <div className="flex items-center gap-2">
        {role ? (
          <Button onClick={handleLogout}>Log Out</Button>
        ) : (
          <>
            <Button>
              <Link to="/login">Login</Link>
            </Button>
            <Button variant="secondary">
              <Link to="/signup">Register</Link>
            </Button>
          </>
        )}
        {role && <ProfileAvatar />}
        <div
          ref={dropDownMenuRef}
          onClick={() => setDropDownState(!dropDownState)}
          className=" relative flex transition-transform md:hidden "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`cursor-pointer transition-colors duration-300 ${
              isScrolled ||
              location.pathname === "/rooms" ||
              location.pathname === "/contact"
                ? "text-black"
                : "text-white"
            }`}
          >
            {" "}
            <line x1="4" x2="20" y1="12" y2="12" />{" "}
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />{" "}
          </svg>
          {dropDownState && (
            <ul className="z-10 gap-2 bg-gray-100 text-black py-4 pl-6 absolute items-start right-0 top-11 flex w-[200px] flex-col  rounded-lg text-base">
              <li className="group flex cursor-pointer flex-col">
                <Link to="/">Home</Link>
                <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-slate-700 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="group flex cursor-pointer flex-col">
                <Link to="/rooms">Rooms</Link>
                <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-slate-700 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="group flex  cursor-pointer flex-col">
                <Link to="aboutUs">About</Link>
                <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-slate-700 transition-all duration-300 group-hover:w-full"></span>
              </li>
              <li className="group flex  cursor-pointer flex-col">
                <Link to="contact">Contact</Link>
                <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-slate-700 transition-all duration-300 group-hover:w-full"></span>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
