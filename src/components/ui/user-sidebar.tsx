/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { cn } from "../../lib/utils";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from 'react-router-dom'
import { IconMenu2, IconX } from "@tabler/icons-react";

export type ChildLink = {
    label: string;
    href: string;
};

interface Links {
    label: string;
    href: string;
    icon: React.JSX.Element | React.ReactNode;
    children?: ChildLink[]
    action?: () => void
}

interface SidebarContextProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
    undefined
);

// eslint-disable-next-line react-refresh/only-export-components
export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider");
    }
    return context;
};

export const SidebarProvider = ({
    children,
    open: openProp,
    setOpen: setOpenProp,
    animate = true,
}: {
    children: React.ReactNode;
    open?: boolean;
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    animate?: boolean;
}) => {
    const [openState, setOpenState] = useState(false);

    const open = openProp !== undefined ? openProp : openState;
    const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

    return (
        <SidebarContext.Provider value={{ open, setOpen, animate: animate }}>
            {children}
        </SidebarContext.Provider>
    );
};

export const Sidebar = ({
    children,
    open,
    setOpen,
    // animate,
}: {
    children: React.ReactNode;
    open?: boolean;
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    animate?: boolean;
}) => {
    return (
        <SidebarProvider open={open} setOpen={setOpen} animate={true}>
            {children}
        </SidebarProvider>
    );
};

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
    return (
        <>
            <DesktopSidebar {...props} />
            <MobileSidebar {...(props as React.ComponentProps<"div">)} />
        </>
    );
};

export const DesktopSidebar = ({
    className,
    children,
    ...props
}: React.ComponentProps<typeof motion.div>) => {
    const { open, setOpen, animate } = useSidebar();
    return (
        <>
            <motion.div
                className={cn(
                    "h-full px-4 py-4 hidden  md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800 w-[300px] flex-shrink-0",
                    className
                )}
                animate={{
                    width: animate ? (open ? "300px" : "60px") : "300px",
                }}
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                {...props}
            >
                {children}
            </motion.div>
        </>
    );
};

export const MobileSidebar = ({
    className,
    children,
    ...props
}: React.ComponentProps<"div">) => {
    const { open, setOpen } = useSidebar();
    return (
        <>
            <div
                className={cn(
                    "h-10 px-4 py-4 flex flex-row md:hidden  items-center justify-between bg-neutral-100 dark:bg-neutral-800 w-full"
                )}
                {...props}
            >
                <div className="flex justify-end z-20 w-full">
                    <IconMenu2
                        className="text-neutral-800 dark:text-neutral-200"
                        onClick={() => setOpen(!open)}
                    />
                </div>
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "-100%", opacity: 0 }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                            }}
                            className={cn(
                                "fixed h-full w-full inset-0 bg-white dark:bg-neutral-900 p-10 z-[100] flex flex-col justify-between",
                                className
                            )}
                        >
                            <div
                                className="absolute right-10 top-10 z-50 text-neutral-800 dark:text-neutral-200"
                                onClick={() => setOpen(!open)}
                            >
                                <IconX />
                            </div>
                            {children}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export const SidebarLink = ({
    link,
    className,
    ...props
}: {
    link: Links;
    className?: string;
    props?: any
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const { open, animate } = useSidebar();

    const handleClick = () => {
        if (link.children) {
            setIsOpen(!isOpen);
        } else if (link.action) {
            link.action()
        }
    };

    return (
        <div className={cn("flex flex-col", className)}>
            {/* Conditional rendering based on children presence */}
            {link.children ? (
                <div
                    className={cn(
                        "flex items-center justify-start cursor-pointer gap-2 group/sidebar py-2",
                        className
                    )}
                    onClick={handleClick}
                    {...props}
                >
                    {link.icon}

                    <motion.span
                        animate={{
                            display: animate ? (open ? "inline-block" : "none") : "inline-block",
                            opacity: animate ? (open ? 1 : 0) : 1,
                        }}
                        className="text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
                    >
                        {link.label}
                    </motion.span>

                    {/* Arrow icon for expandable links */}
                    <motion.div
                        className="ml-auto"
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </motion.div>
                </div>
            ) : (
                // Link for items without children; supports action on click if provided
                <Link
                to={link.href}
                onClick={(e) => {
                    if (link.action) {
                        e.preventDefault();
                        link.action();
                    }
                }}
                className={cn(
                    "flex items-center justify-start gap-2 group/sidebar py-2 cursor-pointer",
                    className
                )}
                {...props}
            >
                {link.icon}
            
                <motion.span
                    animate={{
                        display: animate ? (open ? "inline-block" : "none") : "inline-block",
                        opacity: animate ? (open ? 1 : 0) : 1,
                    }}
                    className="text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block !p-0 !m-0"
                >
                    {link.label}
                </motion.span>
            </Link>
            )}

            {/* Render children links if available */}
            {link.children && isOpen && (
                <motion.div
                    className="ml-4 mt-2 flex flex-col gap-1"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    transition={{ duration: 0.2 }}
                >
                    {link.children.map((child, idx) => (
                        <Link
                            key={idx}
                            to={child.href}
                            className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md"
                        >
                            {child.label}
                        </Link>
                    ))}
                </motion.div>
            )}
        </div>
    );
};
