export type User = {
    address: string;
    email: string;
    name: string;
    phone: string;
    role: string;
    __v: number;
    _id: string;
}


export type LoginResponseData = {
    token: string;
    user: User;
}


export type LoginResponse = {
    success: boolean;
    message: string;
    data: LoginResponseData;
}
