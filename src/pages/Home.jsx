import { useState } from "react";
import { useGames } from "../hooks/useGames";
import GameList from "../components/GameList";

export default function Home() {
  const { games, loading } = useGames();
  const [searchTerm, setSearchTerm] = useState("");

  if (loading) {
    return (
      <div className="loading">
        🎮 Carregando jogos PlayStation...
      </div>
    );
  }

  return (
    <div>
      <div className="header">
        <h1>🎮 Jogos PlayStation</h1>
        <p>Os melhores jogos da plataforma Sony</p>
        
        <div className="filters-container">
          <input
            type="text"
            placeholder="🔍 Buscar jogos..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <GameList games={games} searchTerm={searchTerm} />
    </div>
  );
}