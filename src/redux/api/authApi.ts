
import { LoginResponse } from "@/types/auth.type";
import { baseApi } from "./baseApi";


const authActionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createNewUser: builder.mutation({
            query: (data) => {
                return {
                    url: 'auth/signup',
                    method: "POST",
                    body: data
                }
            }
        }),
        loginUser: builder.mutation({
            query: (data) => ({
                url: 'auth/login',
                method: "POST",
                body: data,
            }),
            transformResponse: (response: LoginResponse) => {
                return {
                    success: response.success,
                    message: response.message,
                    ...response.data,
                };
            },
        })
    })
})

export const { useCreateNewUserMutation, useLoginUserMutation } = authActionApi