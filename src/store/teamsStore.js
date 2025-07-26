import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { nanoid } from 'nanoid/non-secure';

const teamsStore = (set) => ({
  teams: [],

  addTeam: (name) =>
    set((state) => ({
      teams: [...state.teams, { id: nanoid(10), name }],
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
