import { create } from "zustand";

const useStore = create((set) => ({
  keyword: "",
  searchKeyword: "",
  selectedGameId: null,

  setKeyword: (keyword) => set({ keyword }),

  submitSearch: () =>
    set((state) => ({
      searchKeyword: state.keyword,
      selectedGameId: null,
    })),

  showPopularGames: () =>
    set({
      keyword: "",
      searchKeyword: "",
      selectedGameId: null,
    }),

  setSelectedGameId: (id) =>
    set({
      selectedGameId: id,
    }),
}));

export default useStore;