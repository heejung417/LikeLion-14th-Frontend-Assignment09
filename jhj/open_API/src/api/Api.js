import axios from "axios";

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

const gameApi = axios.create({
  baseURL: "https://api.rawg.io/api",
});

export const getPopularGames = async () => {
  const response = await gameApi.get("/games", {
    params: {
      key: API_KEY,
      page_size: 20,
      ordering: "-rating",
    },
  });

  return response.data;
};

export const getSearchGames = async (keyword) => {
  const response = await gameApi.get("/games", {
    params: {
      key: API_KEY,
      search: keyword,
      page_size: 20,
    },
  });

  return response.data;
};

export const getGameDetail = async (id) => {
  const response = await gameApi.get(`/games/${id}`, {
    params: {
      key: API_KEY,
    },
  });

  return response.data;
};