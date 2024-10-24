/* eslint-disable @typescript-eslint/no-explicit-any */
import apiClient from "@/services/apiClient";
import { User } from "@/types";

export const fetchUsers = async (): Promise<User[]> => {
    const { data } = await apiClient.get('http://localhost:8080/api/users');
    return data.data;
};

export const fetchUsersCreate = async (payload: any): Promise<User[]> => {
    const { data } = await apiClient.post('http://localhost:8080/api/users', payload);
    return data.data;
};

export const fetchUsersBySearch = async (searchTerm: string | undefined, statusTerm: string | undefined | null): Promise<User[]> => {
    const { data } = await apiClient.get(`http://localhost:8080/api/users?search=${searchTerm}&status=${statusTerm}`);
    return data.data;
};
  