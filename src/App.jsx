import { useEffect, useState } from "react";
import api from "./api";

export default function App() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/games", { params: { page_size: 5 } }) // Busca os 5 primeiros jogos
      .then((response) => {
        setGames(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar jogos:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando jogos...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Jogos Populares</h1>
      <ul className="space-y-4">
        {games.map((game) => (
          <li key={game.id} className="p-4 rounded-xl shadow bg-gray-100">
            <h2 className="text-lg font-semibold">{game.name}</h2>
            {game.background_image && (
              <img
                src={game.background_image}
                alt={game.name}
                className="rounded-lg mt-2"
              />
            )}
            <p className="text-sm text-gray-700 mt-1">
              Lançamento: {game.released}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
