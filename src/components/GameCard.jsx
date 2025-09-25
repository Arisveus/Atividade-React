import "./GameCard.css";

export default function GameCard({ game }) {
  const getMetacriticClass = (score) => {
    if (!score) return "";
    if (score >= 75) return "metacritic-high";
    if (score >= 50) return "metacritic-medium";
    return "metacritic-low";
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Data não informada";
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  const getPlaystationPlatform = () => {
    const psPlatform = game.platforms?.find(p => 
      p.platform.name.toLowerCase().includes("playstation")
    );
    return psPlatform?.platform.name || "PlayStation";
  };

  return (
    <li className="game-card">
      <h2>{game.name}</h2>

      {game.background_image ? (
        <img src={game.background_image} alt={game.name} />
      ) : (
        <div className="placeholder">
          <div className="placeholder-icon">🎮</div>
          Sem imagem disponível
        </div>
      )}

      <div className="game-info">
        <div className="info-item">
          <span className="info-icon">📅</span>
          <strong>Lançamento:</strong> {formatDate(game.released)}
        </div>
        
        <div className="info-item">
          <span className="info-icon">⭐</span>
          <strong>Metacritic:</strong> 
          {game.metacritic ? (
            <span className={`metacritic-score ${getMetacriticClass(game.metacritic)}`}>
              {game.metacritic}
            </span>
          ) : (
            "N/A"
          )}
        </div>
      </div>

      <div className="platform-badge">
        {getPlaystationPlatform()}
      </div>
    </li>
  );
}