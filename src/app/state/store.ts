import { create } from "zustand";
import { ResultsType } from "../components/StyleResults";

interface StyleStore {
  aiResponse: string;
  results: ResultsType[];
  selectedStyle: ResultsType | null;
  updateResults: (results: ResultsType[]) => void;
  updateAiResponse: (aiResponse: string) => void;
  setSelectedStyle: (style: ResultsType) => void;
}

const useStyleStore = create<StyleStore>((set) => ({
  aiResponse: "",
  results: [],
  selectedStyle: null,
  updateAiResponse: (aiResponse) => set({ aiResponse }),
  updateResults: (results) => set({ results }),
  setSelectedStyle: (style) => set({ selectedStyle: style }),
}));

export { useStyleStore };
