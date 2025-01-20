import { Types } from "mongoose"

export type TRoom = {
    name: string,
    roomNo: number,
    floorNo: number,
    capacity: number,
    pricePerSlot: number,
    amenities: string[],
    isDeleted: boolean,
    _id?: string,
    image: string[],
    images?: File[]
}

export type TRoomsResponse = {
    success: boolean;
    message: string;
    data: TRoom[];
}

export type TSingleRoomResponse = {
    success: boolean;
    message: string;
    data: TRoom;
}

export type TBooking = {
    date: string,
    slots: Types.ObjectId[],
    room: Types.ObjectId,
    user: Types.ObjectId,
    isConfirmed: string,
    isDeleted: boolean,
    totalAmount?: number,
}


export type TSlot = {
    room: Types.ObjectId;
    date: string;
    startTime: string;
    endTime: string;
    isBooked: boolean
}

export type TSlotRoom = {
    room: TRoom
    date: string;
    startTime: string;
    endTime: string;
    isBooked: boolean;
    _id?: string;
};


export type TBookings = {
    _id: string;
    date: string;
    isConfirmed: string;
    isDeleted: boolean;
    room: TRoom;
    slots: TSlot[];
    totalAmount: number;
    __v: number;
    image: string[];
    paymentStatus?: string
};

export type TBookingResponse = {
    success: boolean;
    message: string;
    data: TBookings[];
};