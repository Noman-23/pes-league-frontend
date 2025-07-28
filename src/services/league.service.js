import api from '@/lib/axios';

// Create League
export const createLeague = async (payload) => {
  const res = await api.post('/api/league/create', payload);
  return res.data;
};

// Get All Leagues
export const getAllLeagues = async () => {
  const res = await api.get('/api/league');
  return res.data?.leagues;
};
