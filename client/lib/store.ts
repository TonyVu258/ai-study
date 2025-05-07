import { create } from "zustand";

type Flashcard = { question: string; answer: string };

type Store = {
    notes: string;
    flashcards: Flashcard[];
    setNotes: (n: string) => void;
    setFlashcards: (fc: Flashcard[]) => void;
}

export const useStore = create<Store>((set) => ({ notes: "", flashcards: [], setNotes: (n) => set({ notes: n }), setFlashcards: (fc) => set({ flashcards: fc }) }));