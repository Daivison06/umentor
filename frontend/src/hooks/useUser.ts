import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { User } from '@/types';
import { fetchUsers, fetchUsersBySearch, fetchUsersCreate } from '@/lib/api/queries';

type CreateUserBody = User

export const useGetUsers = (searchTerm?: string, status?: string | undefined | null) => {
  return useQuery<User[], Error>({
    queryKey: ['Users', { search: searchTerm, status: status }],
    queryFn: () => fetchUsersWithParams(searchTerm, status),
  });
};

const fetchUsersWithParams = (searchTerm?: string, statusTerm?: string | null): Promise<User[]> => {
  if (searchTerm || statusTerm) {
    return fetchUsersBySearch(searchTerm, statusTerm);
  }
  return fetchUsers();
};


export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation<User[], Error, CreateUserBody>({
    mutationFn: fetchUsersCreate,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['Users'] });
    },
    onError: (error) => {
      console.error('Error creating user:', error);
    },
  });
};