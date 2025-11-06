import { create } from "zustand";
import { ResultsType } from "../components/StyleResults";

interface StyleStore {
  aiResponse: string;
  aiResponseInitialized: boolean;
  results: ResultsType[];
  selectedStyle: ResultsType | null;
  themeModeIsDark: boolean;
  updateResults: (results: ResultsType[]) => void;
  updateResponseInitialized: (updateResponseInitialized: boolean) => void;
  updateAiResponse: (aiResponse: string) => void;
  updateThemeMode: (themeModeIsDark: boolean) => void;
  setSelectedStyle: (style: ResultsType) => void;
}

const useStyleStore = create<StyleStore>((set) => ({
  aiResponse: "",
  aiResponseInitialized: false,
  results: [],
  selectedStyle: null,
  themeModeIsDark: false,
  updateAiResponse: (aiResponse) => set({ aiResponse }),
  updateResponseInitialized: (aiResponseInitialized) =>
    set({ aiResponseInitialized }),
  updateResults: (results) => set({ results }),
  updateThemeMode: (themeModeIsDark) => set({ themeModeIsDark }),
  setSelectedStyle: (style) => set({ selectedStyle: style }),
}));

export { useStyleStore };
