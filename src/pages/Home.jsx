import { useGames } from "../hooks/useGames";
import GameList from "../components/GameList";

export default function Home() {
  const { games, loading } = useGames();

  if (loading) return <p>Carregando jogos...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Jogos Populares (PlayStation)</h1>
      <GameList games={games} />
    </div>
  );
}
