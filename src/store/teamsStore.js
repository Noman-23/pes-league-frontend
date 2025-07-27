import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const teamsStore = (set) => ({
  teams: [],

  addTeam: (name) =>
    set((state) => ({
      teams: [...state.teams, name],
    })),

  updateTeam: (id, newName) =>
    set((state) => ({
      teams: state.teams.map((team) => (team.id === id ? { ...team, name: newName } : team)),
    })),

  removeTeam: (id) =>
    set((state) => ({
      teams: state.teams.filter((team) => team.id !== id),
    })),

  removeAllTeams: () => set({ teams: [] }),
});

export const useTeamsStore = create(persist(devtools(teamsStore), { name: 'teams' }));
