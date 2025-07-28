import { useMutation, useQuery } from '@tanstack/react-query';
import { createLeague, getAllLeagues } from '@/services/league.service';

// 🔹 Get all leagues
export const useLeagues = () => {
  return useQuery({
    queryKey: ['leagues'],
    queryFn: getAllLeagues,
  });
};

// 🔹 Create league
export const useCreateLeague = () => {
  return useMutation({
    mutationFn: createLeague,
  });
};
