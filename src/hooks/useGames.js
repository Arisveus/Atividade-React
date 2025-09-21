import { useState, useEffect } from "react";
import api from "../api/api";

export function useGames() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/games", { params: { page_size: 20 } })
      .then((response) => {
        
        const psGames = response.data.results.filter((game) =>
          game.platforms?.some((p) =>
            p.platform.name.toLowerCase().includes("playstation")
          )
        );
        setGames(psGames);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar jogos:", error);
        setLoading(false);
      });
  }, []);

  return { games, loading };
}
