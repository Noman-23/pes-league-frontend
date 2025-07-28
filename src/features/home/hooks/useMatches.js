import { useMutation, useQuery } from '@tanstack/react-query';
import { getPointsTable, getMatchesByLeague, updateMatchResult } from '@/services/match.service';

// 🔹 Get Points Table
export const usePointsTable = (leagueId) => {
  return useQuery({
    queryKey: ['points-table', leagueId],
    queryFn: () => getPointsTable(leagueId),
    enabled: !!leagueId,
  });
};

// 🔹 Get All Matches
export const useMatches = (leagueId) => {
  return useQuery({
    queryKey: ['matches', leagueId],
    queryFn: () => getMatchesByLeague(leagueId),
    enabled: !!leagueId,
  });
};

// 🔹 Update Match Result
export const useUpdateMatchResult = () => {
  return useMutation({
    mutationFn: updateMatchResult,
  });
};
