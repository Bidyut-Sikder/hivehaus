import {
    IconAdjustmentsBolt,
    IconArrowLeft,
    IconBrandTabler,
    IconCloud,
    IconCurrencyDollar,
    IconEaseInOut,
    IconHeart,
    IconHelp,
    IconRouteAltLeft,
    IconTerminal2,
} from "@tabler/icons-react";
import { CalendarDays, Grid2x2Check } from "lucide-react";

export const projects = [
    {
        title: 'Discover Your Space Content',
        description:
            "Begin by exploring a variety of rooms tailored to your specific needs, whether it's for meetings, events, or private gatherings. Our easy-to-use platform helps you find the perfect space quickly and efficiently.",
        src: 'rock.jpg',
        link: 'https://rb.gy/irqw9i',
        color: '#5196fd',
    },
    {
        title: 'Select Your Date and Time',
        description:
            'Choose the date and time that best suits your schedule. Our real-time availability ensures that you can book the space exactly when you need it, without any hassle.',
        src: 'tree.jpg',
        link: 'https://rb.gy/3bsl01',
        color: '#8f89ff',
    },
    {
        title: 'Customize Your Setup ',
        description:
            "Tailor the room setup to your event's requirements. From seating arrangements to technical equipment, personalize your space to ensure everything is just right.",
        src: 'water.jpg',
        link: 'https://rb.gy/3ga1hy',
        color: '#13006c',
    },
    {
        title: ' Secure Your Booking',
        description:
            ' Finalize your booking with our secure payment process. Rest assured, your reservation is confirmed, and the space is ready for your arrival.',
        src: 'house.jpg',
        link: 'https://t.ly/mRIVU',
        color: '#ed649e',
    },
    {
        title: 'Enjoy Your Event ',
        description:
            'On the day of your event, simply show up and enjoy your well-prepared space. Focus on what matters most, while we take care of the details.',
        src: 'cactus.jpg',
        link: 'https://rb.gy/kazlax',
        color: '#fd521a',
    },
]

export const features = [
    {
        title: "Built for developers",
        description:
            "Built for engineers, developers, dreamers, thinkers and doers.",
        icon: <IconTerminal2 />,
    },
    {
        title: "Ease of use",
        description:
            "It's as easy as using an Apple, and as expensive as buying one.",
        icon: <IconEaseInOut />,
    },
    {
        title: "Pricing like no other",
        description:
            "Our prices are best in the market. No cap, no lock, no credit card required.",
        icon: <IconCurrencyDollar />,
    },
    {
        title: "100% Uptime guarantee",
        description: "We just cannot be taken down by anyone.",
        icon: <IconCloud />,
    },
    {
        title: "Multi-tenant Architecture",
        description: "You can simply share passwords instead of buying new seats",
        icon: <IconRouteAltLeft />,
    },
    {
        title: "24/7 Customer Support",
        description:
            "We are available a 100% of the time. Atleast our AI Agents are.",
        icon: <IconHelp />,
    },
    {
        title: "Money back guarantee",
        description:
            "If you donot like EveryAI, we will convince you to like us.",
        icon: <IconAdjustmentsBolt />,
    },
    {
        title: "And everything else",
        description: "I just ran out of copy ideas. Accept my sincere apologies",
        icon: <IconHeart />,
    },
];

export const items = [
    {
        id: '1',
        imgSrc:
            'https://images.unsplash.com/photo-1499955085172-a104c9463ece?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Sunrise Splendor',
        description:
            'The first light of day illuminates the rugged peaks, casting a golden glow over the scenic landscape.',
    },
    {
        id: '2',
        imgSrc:
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Misty Mountain Pass',
        description:
            'A mysterious, fog-covered path winds through the serene and rugged mountain terrain.',
    },
    {
        id: '3',
        imgSrc:
            'https://images.unsplash.com/photo-1671507755642-b3bbde48766f?q=80&w=2189&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Pathway to Peaks',
        description:
            'A rugged path leads adventurers toward distant mountain peaks, promising breathtaking views and challenging terrain.',
    },
    {
        id: '5',
        imgSrc:
            'https://images.unsplash.com/photo-1677100091551-748c921e6609?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Eagle’s View',
        description:
            'An aerial perspective showcases the breathtaking expanse of the mountain range, revealing nature’s grand design.',
    },
    {
        id: '6',
        imgSrc:
            'https://images.unsplash.com/photo-1715355936284-d702fe27fbb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Alpine Twilight',
        description:
            'The last light of the day fades behind the alpine skyline, creating a striking silhouette against the twilight sky.',
    },
    {
        id: '7',
        imgSrc:
            'https://res.cloudinary.com/dzl9yxixg/image/upload/v1714558602/three_icxa4g.jpg',
        title: 'Winter’s Mantle',
        description:
            'Snow blankets the mountain peaks, transforming the landscape into a pristine winter wonderland.',
    },
]

export const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
]


export const links = [
    {
        label: "Room Management",
        href: "/",
        icon: (
            <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
        children: [
            {
                label: "Create Room",
                href: "/dashboard/create-room",
            },
            {
                label: "View Rooms",
                href: "/dashboard/view-rooms",
            },
        ],
    },
    {
        label: "Slot Management",
        href: "/dashboard/slot-management",
        icon: (
            <Grid2x2Check className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        )
    },
    {
        label: "Booking Management",
        href: "/dashboard/booking-management",
        icon: (
            <CalendarDays className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        )
    },
    {
        label: "Logout",
        href: "#",
        icon: (
            <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
        ),
    },
];

export const tabs = [
    {
        title: 'Flexible Workspace Options',
        id: 'flexible',
        description:
            'At Nexus Workspace, we offer a variety of flexible workspace options to meet the needs of freelancers, startups, and established businesses. From private offices to shared coworking spaces, find a workspace that adapts to you.',
        imageUrl:
            'https://images.unsplash.com/photo-1496664444929-8c75efb9546f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        title: 'Modern Amenities & Services',
        id: 'amenities',
        description:
            'Enjoy high-speed internet, meeting rooms, break areas, and more at Nexus Workspace. Our amenities are designed to enhance productivity and comfort, creating a seamless work experience for every professional.',
        imageUrl:
            'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        title: 'Why Choose Nexus Workspace?',
        id: 'why-choose',
        description:
            'Nexus Workspace combines modern design with the latest technology to create an ideal environment for work and collaboration. With locations in prime areas and a supportive community, Nexus is where your business can grow.',
        imageUrl:
            'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
];

