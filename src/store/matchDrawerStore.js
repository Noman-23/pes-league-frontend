import { create } from 'zustand';

export const useMatchDrawerStore = create((set) => ({
  isOpen: false,
  selectedMatch: null,

  openDrawer: (match) => set({ isOpen: true, selectedMatch: match }),
  closeDrawer: () => set({ isOpen: false, selectedMatch: null }),
}));
