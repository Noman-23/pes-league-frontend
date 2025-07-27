import { create } from 'zustand';

export const useFavDrawerStore = create((set) => ({
  isOpen: false,
  selectedLeague: null,

  openDrawer: (league) => set({ isOpen: true, selectedLeague: league }),
  closeDrawer: () => set({ isOpen: false, selectedLeague: null }),
}));
