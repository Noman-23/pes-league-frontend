import api from '@/lib/axios';

export const login = async (credentials) => {
  const res = await api.post('/api/users/login', credentials);
  return res.data?.data;
};
