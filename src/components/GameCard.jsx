export default function GameCard({ game }) {
  return (
    <li className="p-4 rounded-xl shadow bg-gray-100">
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
  );
}
