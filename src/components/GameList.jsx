import GameCard from "./GameCard";


export default function GameList({ games, searchTerm = "" }) {
  const filteredGames = games.filter(game =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filteredGames.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">🎮</div>
        <h3>Nenhum jogo encontrado</h3>
        <p>{searchTerm ? `Para "${searchTerm}"` : "Não há jogos disponíveis"}</p>
      </div>
    );
  }

  return (
    <ul className="games-grid">
      {filteredGames.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </ul>
  );
}