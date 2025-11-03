import { create } from "zustand";
import { ResultsType } from "../components/StyleResults";

interface StyleStore {
  aiResponse: string;
  aiResponseInitialized: boolean;
  results: ResultsType[];
  selectedStyle: ResultsType | null;
  updateResults: (results: ResultsType[]) => void;
  updateResponseInitialized: (updateResponseInitialized: boolean) => void;
  updateAiResponse: (aiResponse: string) => void;
  setSelectedStyle: (style: ResultsType) => void;
}

const useStyleStore = create<StyleStore>((set) => ({
  aiResponse: "",
  aiResponseInitialized: false,
  results: [],
  selectedStyle: null,
  updateAiResponse: (aiResponse) => set({ aiResponse }),
  updateResponseInitialized: (aiResponseInitialized) =>
    set({ aiResponseInitialized }),
  updateResults: (results) => set({ results }),
  setSelectedStyle: (style) => set({ selectedStyle: style }),
}));

export { useStyleStore };
