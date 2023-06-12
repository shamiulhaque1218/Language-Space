/* eslint-disable no-unused-vars */
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from "./useAxiosSecure";

const useInstractor = () => {
    const {user, loading} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const {data: isInstractor, isLoading: isInstractorLoading} = useQuery({
        queryKey: ['isInstractor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/ins/Instructor/${user?.email}`);
            return res?.data;
        }
    })
    console.log(isInstractor)
    return [isInstractor, isInstractorLoading]
}


export default useInstractor;