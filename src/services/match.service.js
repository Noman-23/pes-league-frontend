import api from '@/lib/axios';

// Get Points Table
export const getPointsTable = async (leagueId) => {
  const res = await api.get(`/api/matches/league/${leagueId}/points`);
  return res.data;
};

// Get All Matches for a League
export const getMatchesByLeague = async (leagueId) => {
  const res = await api.get(`/api/matches/league/${leagueId}`);
  return res.data?.weeks;
};

// Update Match Result
export const updateMatchResult = async ({ matchId, scores }) => {
  const res = await api.post(`/api/matches/${matchId}/result`, scores);
  return res.data;
};
