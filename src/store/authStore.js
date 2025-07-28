import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const authStore = (set) => ({
  user: null,
  token: null,

  login: ({ user, token }) =>
    set(() => ({
      user,
      token,
    })),

  logout: () =>
    set(() => ({
      user: null,
      token: null,
    })),

  updateUser: (updatedUser) =>
    set((state) => ({
      user: {
        ...state.user,
        ...updatedUser,
      },
    })),
});

export const useAuthStore = create(
  persist(devtools(authStore), {
    name: 'auth', // key for localStorage
  })
);
