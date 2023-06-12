/* eslint-disable no-unused-vars */
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from "./useAxiosSecure";

const useAdmins = () => {
    const {user, loading} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/ins/Admin/${user?.email}`);
            return res?.data;
        }
    })

    console.log(isAdmin)
    return [isAdmin, isAdminLoading]
}


export default useAdmins;