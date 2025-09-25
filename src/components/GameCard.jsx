export default function GameCard({ game }) {
  return (
    <li className="p-4 rounded-xl shadow bg-white hover:shadow-lg transition w-72">
      <h2 className="text-lg font-bold text-gray-900">{game.name}</h2>

      {game.background_image ? (
        <img
          src={game.background_image}
          alt={game.name}
          className="rounded-lg mt-2 w-full h-40 object-cover"
        />
      ) : (
        <div className="mt-2 w-full h-40 bg-gray-300 flex items-center justify-center text-gray-600 text-sm rounded-lg">
          Sem imagem
        </div>
      )}

      <p className="text-sm text-gray-700 mt-2">
        🎮 <span className="font-medium">Lançamento:</span>{" "}
        {game.released || "Data não informada"}
      </p>

      <p className="text-sm text-gray-700 mt-1">
        Nota Metacritic: {game.metacritic ?? "N/A"}
      </p>
    </li>
  );
}
