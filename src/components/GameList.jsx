import GameCard from "./GameCard";

export default function GameList({ games }) {
  return (
    <ul className="space-y-4">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </ul>
  );
}
