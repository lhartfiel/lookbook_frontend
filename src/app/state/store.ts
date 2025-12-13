import { create } from "zustand";
import { ResultsType } from "../types";

/**
 * Interface defining the structure of the style store used for state management.
 */

interface StyleStore {
  aiResponse: string;
  aiResponseInitialized: boolean;
  favorites: ResultsType[];
  favoriteIds: string[];
  results: ResultsType[];
  selectedStyle: ResultsType | null;
  themeModeIsDark: boolean;
  updateResults: (results: ResultsType[]) => void;
  updateFavorites: (favorites: ResultsType[]) => void;
  updateFavoriteIds: (favoriteIds: string[]) => void;
  updateResponseInitialized: (updateResponseInitialized: boolean) => void;
  updateAiResponse: (aiResponse: string) => void;
  updateThemeMode: (themeModeIsDark: boolean) => void;
  setSelectedStyle: (style: ResultsType) => void;
}

/**
 * Zustand store for managing style-related state in the application.
 */

const useStyleStore = create<StyleStore>((set) => ({
  aiResponse: "",
  aiResponseInitialized: false,
  favorites: [],
  favoriteIds: [],
  results: [],
  selectedStyle: null,
  themeModeIsDark: false,
  updateFavorites: (favorites) => set({ favorites }),
  updateFavoriteIds: (favoriteIds) => set({ favoriteIds }),
  updateAiResponse: (aiResponse) => set({ aiResponse }),
  updateResponseInitialized: (aiResponseInitialized) =>
    set({ aiResponseInitialized }),
  updateResults: (results) => set({ results }),
  updateThemeMode: (themeModeIsDark) => set({ themeModeIsDark }),
  setSelectedStyle: (style) => set({ selectedStyle: style }),
}));

export { useStyleStore };
