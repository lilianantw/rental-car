import { create } from "zustand";

type FavoritesState = {
  favorites: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
};

// Загрузка из localStorage
const loadFromStorage = () => {
  if (typeof window === "undefined") return [];
  try {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

export const useFavoritesStore = create<FavoritesState>((set, get) => ({
  favorites: loadFromStorage(),

  toggleFavorite: (id) => {
    const { favorites } = get();
    let updated;

    if (favorites.includes(id)) {
      updated = favorites.filter((fav) => fav !== id);
    } else {
      updated = [...favorites, id];
    }

    set({ favorites: updated });
    localStorage.setItem("favorites", JSON.stringify(updated));
  },

  isFavorite: (id) => get().favorites.includes(id),
}));
