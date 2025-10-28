import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface AppState {
  gameStarted: boolean;
  personsDiscarded: string[];
  startGame: () => void;
  resetGame: () => void;
  togglePerson: (personId: string) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      gameStarted: false,
      personsDiscarded: [],
      startGame: () => set({ gameStarted: true }),
      resetGame: () => set({ gameStarted: false, personsDiscarded: [] }),
      togglePerson: (personId: string) =>
        set((state) => {
          const isDiscarded = state.personsDiscarded.includes(personId);
          return {
            personsDiscarded: isDiscarded
              ? state.personsDiscarded.filter((id) => id !== personId)
              : [...state.personsDiscarded, personId],
          };
        }),
    }),
    {
      name: "wg-wiw-store",
    }
  )
);
