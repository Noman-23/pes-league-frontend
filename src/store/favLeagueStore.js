import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const favLeagueStore = (set) => ({
  leagues: [],

  // Add a league object to favorites (avoid duplicates by _id)
  addFavLeague: (league) =>
    set((state) => {
      if (state.leagues.some((l) => l._id === league._id)) return state;
      return { leagues: [...state.leagues, league] };
    }),

  //## Remove a favorite by _id
  removeFavLeague: (id) =>
    set((state) => ({
      leagues: state.leagues.filter((league) => league._id !== id),
    })),

  //## Remove all favorites
  removeAllLeagues: () => set({ leagues: [] }),
});

export const useFavLeagueStore = create(persist(devtools(favLeagueStore), { name: 'favLeagues' }));
